<template>
  <button class="category-item-btn" :id="id" :class="{'active': isActive === true}">{{ text }}</button>
</template>

<script>
export default {
  name: "CategorySelectBtn",
  props: {
    text: String
  },
  data() {
    return {
      id: Number,
      isActive: false
    }
  }
}
</script>

<style lang="scss">
.category-item-btn {
  height: 32px;
  padding: 5px 12px;
  box-sizing: border-box;
  border: 1px solid #6C6C6C;
  border-radius: 8px;
  background: white;
  color: #424242;
  cursor: pointer;
  &.active {
    border: 1px solid #FF0099;
    color: #FF0099;
  }
}
</style>