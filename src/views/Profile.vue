<template>
<div class="profile-container">
  <h1>전문가 소개</h1>
  <div class="profile-wrapper">
    <div class="profile-img-wrapper">
      <img class="profile-img" src="/assets/icons/default_user_icon.png" />
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

  <div class="name-select-wrapper">
    <input-group labelText="이름" />
  </div>

  <div class="category-select-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>제공 서비스</label>
        <p>필수</p>
      </div>
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
          class="category-tab"
          :class="{'active': currentTab === index}">
          {{ tab.text }}
        </button>
      </div>
      <div class="tab-contents" v-if="currentTab === 0">
        <custom-tab-input-group label="제공 서비스 소개" desc="ex) 창업, 자금조달, 신규사업, 투자유피, 신년도 사업계획 등 사업내용을 정리합니다. 또 사업 실패요인을 분석한 후 발생할 시행착오를 최소화함으로써 시간과 비용을 절약해드립니다."/>
        <custom-tab-input-group label="전문 분야" desc="ex) 소셜벤처 / 소상공인 / 프렌차이즈 / 기술 창업 등 (서술형)"/>
        <custom-tab-input-group label="한줄 소개" desc="ex) 안녕하세요. 창업 전문 글작성가 김다른입니다. (서술형)"/>
        <custom-tab-input-group label="상세 설명" desc="ex) 예비창업패키지 전문 멘토 및 심사위원으로 창업의 전반적인 컨설팅 및 업무가 가능합니다. (서술형)"/>
      </div>
      <div class="tab-contents" v-if="currentTab === 1">
        <custom-tab-input-group label="제공 서비스 소개" desc="ex) 로고, 캐릭터 등 디자인 내용을 정리합니다."/>
        <custom-tab-input-group label="전문 분야" desc="ex) 로고 / 캐릭터 등 (서술형)"/>
        <custom-tab-input-group label="한줄 소개" desc="ex) 안녕하세요. 캐릭터 디자인 전문가 김다른입니다. (서술형)"/>
        <custom-tab-input-group label="상세 설명" desc="ex) 예비창업패키지 전문 멘토 및 심사위원으로 창업의 전반적인 컨설팅 및 업무가 가능합니다. (서술형)"/>
      </div>
      <div class="tab-contents" v-if="currentTab === 2">
        <custom-tab-input-group label="제공 서비스 소개" desc="ex) Backend, Frontend 등 개발가능 분야를 정리합니다."/>
        <custom-tab-input-group label="전문 분야" desc="ex) Java, Kotlin, PHP, Python 등 전문분야 (서술형)"/>
        <custom-tab-input-group label="한줄 소개" desc="ex) 안녕하세요. 서버 전문 개발자 김다른입니다. (서술형)"/>
        <custom-tab-input-group label="상세 설명" desc="ex) 예비창업패키지 전문 멘토 및 심사위원으로 창업의 전반적인 컨설팅 및 업무가 가능합니다. (서술형)"/>
      </div>
      <div class="tab-contents" v-if="currentTab === 3">
        <custom-tab-input-group label="제공 서비스 소개" desc="ex) PC 조립, 서버 세팅 등 사업내용을 정리합니다."/>
        <custom-tab-input-group label="전문 분야" desc="ex) 워크스테이션, 일반 PC 등 (서술형)"/>
        <custom-tab-input-group label="한줄 소개" desc="ex) 안녕하세요. PC 조립 전문가 김다른입니다. (서술형)"/>
        <custom-tab-input-group label="상세 설명" desc="ex) 예비창업패키지 전문 멘토 및 심사위원으로 창업의 전반적인 컨설팅 및 업무가 가능합니다. (서술형)"/>
      </div>
    </div>
  </div>

  <custom-file-input-group label="포트폴리오" :essential="true" />

  <div class="identity-verification-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>본인인증</label>
        <p>필수</p>
      </div>
    </div>
    <div class="identity-verification-button-wrapper">
      <button class="identity-verification-btn" type="button">인증하기</button>
    </div>
  </div>

  <div class="area-select-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>지역</label>
      </div>
    </div>
    <div class="area-select-field">
      <select>
        <option>광역시/도</option>
      </select>

      <select>
        <option>시/구</option>
      </select>
    </div>
  </div>

  <custom-file-input-group label="경력 사항" :essential="false" />

  <custom-file-input-group label="학력 사항" :essential="false" />
</div>
</template>

<script>
import InputGroup from "@/components/molecules/InputGroup.vue";
import CategorySelect from "@/components/modal/CategorySelect.vue";
import CompanyInfoCreate from "@/components/modal/CompanyInfoCreate.vue";
import TabItem from "@/components/atoms/TabItem.vue";
import TextareaGroup from "@/components/molecules/textareaGroup.vue";
import CustomInput from "@/components/atoms/CustomInput.vue";
import CustomTabInputGroup from "@/components/atoms/CustomTabInputGroup.vue";
import CustomFileInputGroup from "@/components/atoms/CustomFileInputGroup.vue";

export default {
  name: "Profile",
  components: {
    CustomInput, TextareaGroup, TabItem,
    CompanyInfoCreate, CategorySelect, InputGroup,
    CustomTabInputGroup, CustomFileInputGroup
  },
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
        right: 0;
        bottom: 0;
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
  .name-select-wrapper {
  }
  .category-select-wrapper {
    margin-top: 20px;
    .title-wrapper {
      display: flex;
      margin-bottom: 10px;
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
    }
    .category-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .category-select-tab {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .category-tab {
          width: 100%;
          height: 45px;
          background: #EEEEEE;
          color: black;
          font-weight: bold;
          font-size: 18px;
          border-top: 1px solid #EEEEEE;
          border-right: 1px solid #EEEEEE;
          border-left: 1px solid #EEEEEE;
          border-bottom: 0;
          border-radius: 10px 10px 0 0;
          &.active {
            background: #FFFFFF;
            border-top: 1px solid #EEEEEE;
            border-right: 1px solid #EEEEEE;
            border-left: 1px solid #EEEEEE;
          }
        }
      }
      .tab-contents {
        border-top: 0;
        border-bottom: 1px solid #EEEEEE;
        border-left: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
        border-radius: 0 0 10px 10px;
        box-shadow: 0px 12px 24px rgba(207, 215, 226, 0.54);
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
  .identity-verification-wrapper {
    margin-top: 50px;
    .identity-verification-button-wrapper {
      margin-top: 10px;
      .identity-verification-btn {
        width: 100px;
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
    }
  }

  .area-select-wrapper {
    margin-top: 50px;
    .area-select-field {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      select {
        margin: 0 20px 0 0;
        width: 110px;
        height: 32px;
        border: 1px solid #EEEEEE;
        border-radius: 5px;
        text-align: center;
      }
    }
  }
}
.title-label-wrapper {
  display: flex;
  margin: auto 0;
  label {
    font-weight: bold;
    margin: auto 0 0 5px;
    color: #2C2C2C;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: #FF4040;
    margin: auto 10px 0 5px;
  }
}
</style>