<template>
<div class="category-list">
  <category-item v-for="item in categoryData" :title="item.title" :icon="item.icon" />
</div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  name: "CategoryList",
  components: {CategoryItem},
  data() {
    return {
      categoryData: [
        {title: "문서작성", icon: "https://dummyimage.com/60x60/000/fff"},
        {title: "SW개발", icon: "https://dummyimage.com/60x60/000/fff"},
        {title: "HW개발", icon: "https://dummyimage.com/60x60/000/fff"},
        {title: "디자인", icon: "https://dummyimage.com/60x60/000/fff"},
        {title: "마케팅", icon: "https://dummyimage.com/60x60/000/fff"},
        {title: "경영지원", icon: "https://dummyimage.com/60x60/000/fff"},
        {title: "인쇄출판", icon: "https://dummyimage.com/60x60/000/fff"},
      ]
    }
  }
}
</script>

<style lang="scss">
.category-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>