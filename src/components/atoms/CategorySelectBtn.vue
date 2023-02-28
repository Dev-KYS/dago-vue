<template>
  <button class="category-item-btn" :class="{'active': isActive === true}" @click="isActive = !isActive" @change="">{{ text }}</button>
</template>

<script>
export default {
  name: "CategorySelectBtn",
  props: {
    text: String
  },
  data() {
    return {
      isActive: false
    }
  },
  watch: {
    isActive: (cur, prev) => {
      console.log("prev: " + prev + " / cur: " + cur)
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