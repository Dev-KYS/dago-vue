<template>
<transition name="modal">
  <div class="category-modal-mask" v-if="show">
    <div class="category-modal-container">
      <div class="category-modal-content-wrapper">
        <div class="category-modal-header">
          <label>제공 서비스</label>
        </div>
        <div class="category-modal-body">
          <div class="category-tooltip">
            <span style="color: #FF0099">Tip.</span><span> 2가지 이상 제공 서비스가 가능합니다.</span>
          </div>
          <p class="category-header">대분류</p>
          <div class="first-category-list">
            <button class="category-item-btn" v-for="item in items" :class="{'active': selectedCategoryId === item.id}" @click="categorySelected(item.id)">{{item.title}}</button>
          </div>
          <p class="category-header">세부 카테고리</p>
          <div class="second-category-list">
            <button class="category-item-btn" v-for="item in subs" :class="{'active': selectedSubCategoryId === item.id}" @click="selectedSubCategoryId = item.id">{{item.title}}</button>
          </div>
          <div class="category-description">
            <textarea rows="3" placeholder="ex) 기타 카테고리 내용을 작성해주세요"/>
          </div>
        </div>
      </div>
      <div class="category-modal-footer">
        <div class="button-wrapper">
          <custom-button type="button" text="저장하기" button-class="primary mid" />
          <custom-button type="button" text="취소" button-class="natural mid" @click="$emit('close')"/>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import SelectCategoryItem from "@/components/molecules/SelectCategoryItem.vue";
import CategorySelectBtn from "@/components/atoms/CategorySelectBtn.vue";

export default {
  name: "ProjectCategorySelect",
  components: {CategorySelectBtn, SelectCategoryItem, CustomButton},
  props: {
    show: Boolean
  },
  data() {
    return {
      selectedCategoryId: Number,
      selectedSubCategoryId: Number,
      items: [
        {
          id: 1,
          title: '문서 및 글작성',
          subItems: [
            { id: 1, itemId: 1, title: '사업계획서 작성' }
          ]
        },
        {
          id: 2,
          title: 'SW개발',
          subItems: [
            { id: 1, itemId: 2, title: '모바일' }
          ]
        },
        {
          id: 3,
          title: 'HW개발',
          subItems: [
            { id: 1, itemId: 3, title: '메이커' }
          ]
        },
        {
          id: 4,
          title: '디자인',
          subItems: [
            { id: 1, itemId: 4, title: '캐릭터' }
          ]
        },
        {
          id: 5,
          title: '마케팅',
          subItems: [
            { id: 1, itemId: 5, title: '광고' }
          ]
        },
        {
          id: 6,
          title: '경영지원',
          subItems: [
            { id: 1, itemId: 6, title: '회계' }
          ]
        }
      ],
      subs: []
    }
  },
  methods: {
    categorySelected(id) {
      this.selectedSubCategoryId = 0;
      this.selectedCategoryId = id;
      this.subs = this.items.filter(data => data.id === id)[0].subItems
    }
  }
}
</script>

<style lang="scss">
.category-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .category-modal-container {
    width: 500px;
    height: 750px !important;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .category-modal-content-wrapper {
      width: 100%;
      .category-modal-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        label {
          font-size: 26px;
          font-weight: bold;
          color: #1B1B1B;
        }
      }
      .category-modal-body {
        .category-tooltip {
          background: #FFEBF8;
          border-radius: 10px;
          padding: 10px 20px;
          span {
            font-size: 12px;
          }
        }
        .category-header {
          font-weight: bold;
          font-size: 16px;
          margin-top: 20px;
        }
        .first-category-list {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          .category-item-btn {
            margin-bottom: 10px;
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
        .second-category-list {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          .category-item-btn {
            margin-bottom: 10px;
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
        .select-category-list {
          margin-top: 30px;
          height: 220px;
          overflow-y: scroll;
          padding: 20px 0;
          background: #EEEEEE;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          -ms-overflow-style: none;
          scrollbar-width: none;
          .select-category-item {
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
          &::-webkit-scrollbar {
            display: none;
          }
        }
        .category-description {
          margin-top: 10px;
          textarea {
            padding: 10px;
            width: 100%;
            resize: none;
            border: 1px solid #EEEEEE;
            border-radius: 8px;
          }
        }
      }
    }

    .category-modal-footer {
      .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .button {
          width: 160px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>