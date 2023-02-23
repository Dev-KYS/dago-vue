<template>
<div class="profile-container">
  <h1>전문가 소개</h1>
  <div class="profile-wrapper">
    <div class="profile-img-wrapper">
      <img class="profile-img" src="" />
      <button class="profile-edit-btn">
        <img src="/assets/icons/edit.png" />
      </button>
    </div>
  </div>

  <div class="business-yn-wrapper">
    <h3>사업자 등록 여부</h3>
    <div class="business-btn">
      <button class="check-btn" :class="{'active': businessYn === true}" @click="this.companyCreate(true)">여</button>
      <button class="check-btn" :class="{'active': businessYn === false}" @click="companyCreate(false)">부</button>
      <Teleport to="body">
        <company-info-create :show="showCompanyModal" @close="showCompanyModal = false" />
      </Teleport>
    </div>
  </div>

  <input-group />

  <div class="category-select-wrapper">
    <div class="title-wrapper">
      <p>제공 서비스</p>
      <button class="category-add-btn" @click="showCategoryModal = true">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.335 10.627H10.085V15.877H8.58496V10.627H3.33496V9.12695H8.58496V3.87695H10.085V9.12695H15.335V10.627Z" fill="#FF0099"/>
        </svg>
        서비스 추가
      </button>
      <Teleport to="body">
        <category-select :show="showCategoryModal" @close="showCategoryModal = false" />
      </Teleport>
    </div>
    <div class="category-wrapper">
      <div class="category-select-tab">
        <button
          v-for="(tab, index) in categoryList"
          :key="index"
          @click.prevent="currentTab = index"
          :class="{'active': currentTab === index}">
          {{ tab.text }}
        </button>
      </div>
      <div class="tab-contents" v-if="currentTab === 0">
        1
      </div>
      <div class="tab-contents" v-if="currentTab === 1">
        2
      </div>
    </div>
  </div>

  <div class="category-introduce-wrapper">
    <p>제공 서비스 소개</p>
    <div class="intro-text-list">
      <textarea></textarea>
    </div>
  </div>
</div>
</template>

<script>
import InputGroup from "@/components/molecules/InputGroup.vue";
import CategorySelect from "@/components/modal/CategorySelect.vue";
import CompanyInfoCreate from "@/components/modal/CompanyInfoCreate.vue";
import TabItem from "@/components/atoms/TabItem.vue";

export default {
  name: "Profile",
  components: {TabItem, CompanyInfoCreate, CategorySelect, InputGroup},
  data() {
    return {
      businessYn: false,
      showCategoryModal: false,
      showCompanyModal: false,
      currentTab: 0,
      categoryList: [
        {id: 1, text: '문서 및 글작성', contents: '1'},
        {id: 2, text: '디자인', contents: '2'},
        {id: 3, text: 'SW개발', contents: '3'},
        {id: 4, text: 'HW개발', contents: '4'},
      ]
    }
  },
  computed: {
    current() {
      return this.categoryList.find(el => el.id === this.currentId) || {}
    }
  },
  methods: {
    companyCreate(bol) {
      this.businessYn = bol
      if(this.businessYn === true) {
        this.showCompanyModal = true
      }
    }
  }
}
</script>

<style lang="scss">
.profile-container {
  width: 760px;
  margin: 0 auto;
  .profile-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .profile-img-wrapper {
      position: relative;
      .profile-img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      .profile-edit-btn {
        box-shadow: 0 4px 0 0 rgba(207, 215, 226, 0.64);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: white;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        right: -10px;
        bottom: -5px;
        img {
          width: 18px;
        }
      }
    }
  }
  .business-yn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 47px;
    .business-btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-left: 10px;
      .check-btn {
        width: 100px;
        height: 40px;
        background: white;
        border-radius: 10px;
        border: 1px solid #000000;
        cursor: pointer;
        &:first-child {
          margin-right: 10px;
        }
        &.active {
          color: #FF0099;
          border: 1px solid #FF0099;
          font-weight: bold;
        }
      }
    }
  }

  .category-select-wrapper {
    .category-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border: 1px solid #EEEEEE;
      padding: 24px 20px;
      .category-add-btn {
        width: 120px;
        height: 32px;
        background: transparent;
        border: 1px solid #FF0099;
        color: #FF0099;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        svg {
          margin-right: 8px;
        }
      }
      .category-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
      }
      .category-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid #6C6C6C;
        height: 32px;
        border-radius: 8px;
        padding: 6px 8px 6px 12px;
        box-sizing: border-box;
        cursor: pointer;
        span {
          font-size: 14px;
        }
        .remove-btn {
          background: transparent;
          border: none;
          margin-left: 8px;
          cursor: pointer;
          img {
            width: 12px;
          }
        }
      }
    }
  }
}
</style>