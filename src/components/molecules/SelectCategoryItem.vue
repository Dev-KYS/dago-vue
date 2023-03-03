<template>
<div class="select-category-item">
  <button class="remove-btn" @click="removeItem">
    <img src="/assets/icons/close_gray.png" />
  </button>
  <span class="srt-num">{{ srt }}</span>
  <label>{{ firstCategory }}</label>
  <img src="/assets/icons/arrow-right.png" />
  <label>{{ secondCategory }}</label>
</div>
</template>

<script>
export default {
  name: "SelectCategoryItem",
  props: {
    srt: Number,
    firstCategory: String,
    secondCategory: String,
  },
  methods: {
    removeItem() {
      this.$el.parentNode.removeChild(this.$el)
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
  padding: 18px 50px 18px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  label {
    font-size: 16px;
    font-weight: bold;
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
  .srt-num {
    width: 24px;
    height: 24px;
    border: 2px solid #FF0099;
    border-radius: 50%;
    color: #FF0099;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
  }
  .h3 {
    color: #2C2C2C;
    font-size: 16px;
  }
  img {
    width: 20px;
  }
}
</style>