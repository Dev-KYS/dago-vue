<template>
  <div class="category-item">
    <img :src="icon" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    title: String,
    icon: String,
  }
}
</script>

<style lang="scss">
.category-item {
  width: 152px;
  height: 152px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #FFEBF7;
  }
  img {
    width: 60px;
  }
  span {
    font-size: 20px;
    color: #2C2C2C;
    margin-top: 12px;
  }
}
</style>