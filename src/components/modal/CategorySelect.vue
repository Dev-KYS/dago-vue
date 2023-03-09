<template>
<Transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-content-wrapper">
        <div class="modal-header">
          <label>제공 서비스</label>
        </div>
        <div class="modal-body">
          <div class="category-tooltip">
            <span style="color: #FF0099">Tip.</span><span> 2가지 이상 서비스 제공이 가능합니다.</span>
          </div>
          <p class="category-header">대분류</p>
          <div class="first-category-list">
            <button class="category-item-btn" v-for="item in items" :class="{'active': selectedCategoryId === item.id}" @click="getSecondCategoryList(item.id, item.title)">{{item.title}}</button>
<!--            <category-select-btn v-for="item in items" :text="item.title" :is-active="item.check" @click="firstCategoryChange(item.id)"/>-->
          </div>
          <p class="category-header">세부 카테고리</p>
          <div class="second-category-list">
            <button class="category-item-btn" v-for="item in subs" :class="{'active': selectedSubCategoryId === item.id}" @click="selectCategory(item.id, item.title)">{{item.title}}</button>
<!--            <category-select-btn v-for="sub in subs" :text="sub.title" />-->
          </div>
          <div class="select-category-list">
            <select-category-item
                v-for="(item, index) in this.$store.getters.getSelectCategoryTextList"
                :id="item.id"
                :first-category="item.first"
                :second-category="item.second"
                :is_old="item.is_old"
                :profile_category_id="item.profile_category_id"
            />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="button-wrapper">
          <custom-button type="button" text="저장하기" button-class="primary mid" @click="submit" />
          <custom-button type="button" text="취소" button-class="natural mid" @click="$emit('close')"/>
        </div>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
import CategorySelectBtn from "@/components/atoms/CategorySelectBtn.vue";
import CustomButton from "@/components/atoms/CustomButton.vue";
import SelectCategoryItem from "@/components/molecules/SelectCategoryItem.vue";

export default {
  name: "CategorySelect",
  components: {SelectCategoryItem, CustomButton, CategorySelectBtn},
  props: {
    show: Boolean,
    active: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      selectedCategoryId: Number,
      selectedSubCategoryId: Number,
      items: [],
      subs: [],
      // selectCategoryList: [],
      selectCategoryTextList: [],
      selectFirstCategoryNm: String,
      selectSecondCategoryNm: String
    }
  },
  computed: {
    checked: {
      get() {
        return this.active
      },
      set(value) {
        this.$emit('update:active', value)
      }
    }
  },
  methods: {
    firstCategoryChange(itemId) {
      const temp = this.items;
      temp.forEach(item => {
        if (item.id === itemId) {
          item.check = true;
          this.subs = item.subItems;
        } else {
          item.check = false;
        }
      })
      this.items = temp
      // console.log(this.items)
    },
    // 카테고리 대분류 조회
    getFirstCategoryList() {
      this.axios.get('/category').then(res => {
        this.items = res.data.data
        // console.log(res.data.data)
      })
    },
    // 세부 카테고리 조회
    getSecondCategoryList(id, title) {
      this.selectedCategoryId = id
      this.selectFirstCategoryNm = title
      this.axios.get(`/category/${id}`).then(res => {
        // console.log(res.data.data)
        this.subs = res.data.data
      })
    },
    // 세부 카테고리 클릭시
    selectCategory(id, title) {
      this.selectSecondCategoryNm = title
      this.selectedSubCategoryId = id
      // this.selectCategoryList.push(id)
      const data = {}
      data.id = id
      data.first = this.selectFirstCategoryNm
      data.second = this.selectSecondCategoryNm
      data.is_old = false
      this.$store.dispatch('setCategoryList', data)
      // this.selectCategoryTextList.push(data)
    },
    getOldCategory() {
      let el = this
      this.axios.get('/profile_category', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        res.data.data.forEach(function (item) {
          // item.id
          // item.srt
          // item.has_category.id

          const data = {}
          data.id = item.has_category.id
          data.first = item.has_category.has_upper.title
          data.second = item.has_category.title
          data.is_old = true
          data.profile_category_id = item.id

          el.$store.dispatch('setCategoryList', data)
          // console.log('store set')
          // el.selectCategoryTextList.push(data)
          // item.has_category.title
          // item.has_category.has_upper.id
          // item.has_category.has_upper.title
          // console.log(item.has_category.has_upper.title)
        })
        // console.log(res)
      }).catch(error => {

      })
    },
    submit() {
      this.axios.post('/profile_category', {
        category: this.$store.getters.getSelectCategoryIds
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        this.$store.dispatch('getCategoryFormList')
        this.$emit('close')
      }).catch(error => {

      })
    }
  },
  mounted() {
    this.getFirstCategoryList()
    this.getOldCategory()
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .modal-container {
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
    .modal-content-wrapper {
      width: 100%;
      .modal-header {
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
      .modal-body {
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
          //.radio-btn-group {
          //  display: flex;
          //
          //  .radio {
          //    margin: 0 .25rem;
          //
          //    label {
          //      background: #fff;
          //      border: 1px solid #6C6C6C;
          //      padding: .5rem 1.25rem;
          //      border-radius: 8px;
          //      box-sizing: border-box;
          //      cursor: pointer;
          //      color: #424242;
          //      transition: box-shadow 400ms ease;
          //
          //      &:hover {
          //        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
          //      }
          //    }
          //
          //    input[type="radio"] {
          //      display: none;
          //    }
          //
          //    input[type="radio"]:checked+label {
          //      background: #FF0099;
          //      color: #fff;
          //      border-color: #FF0099;
          //    }
          //  }
          //}
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
      }
    }

    .modal-footer {
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