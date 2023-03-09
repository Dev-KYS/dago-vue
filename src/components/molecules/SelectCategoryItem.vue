<template>
<div class="select-category-item">
  <button class="remove-btn" @click="removeItem(profile_category_id)">
    <img src="/assets/icons/close_gray.png" />
  </button>
  <label>{{ firstCategory }}</label>
  <img src="/assets/icons/arrow-right.png" />
  <label>{{ secondCategory }}</label>
</div>
</template>

<script>
export default {
  name: "SelectCategoryItem",
  props: {
    id: Number,
    firstCategory: String,
    secondCategory: String,
    is_old: false,
    profile_category_id: Number,
  },
  methods: {
    removeItem(id) {
      // console.log(id)
      if(this.is_old === true) {
        if(confirm('기존에 등록된 항목은 삭제시 복구가 불가능합니다\n삭제하시겠습니까?')) {
          this.axios.delete(`/profile_category/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
          }).then(res => {
            this.$store.dispatch('removeCategoryList', this.id)
            this.$el.parentNode.removeChild(this.$el)
          }).catch(error => {
            console.log(error)
          })
        }
      }else{
        this.$store.dispatch('removeCategoryList', id)
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
}
</script>

<style lang="scss">
.select-category-item {
  height: 80px;
  width: 422px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 12px 24px 0 rgba(207, 215, 226, 0.54);
  padding: 18px 50px 18px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  label {
    font-size: 16px;
    font-weight: bold;
    flex: 1;
  }
  .remove-btn {
    background: transparent;
    border: none;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    img {
      width: 12px;
    }
  }
  .h3 {
    color: #2C2C2C;
    font-size: 16px;
  }
  & > img {
    width: 20px;
    margin-right: 30px;
  }
}
</style>