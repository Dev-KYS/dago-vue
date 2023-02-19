<template>
    <header-nav />
    <div class="container">
      <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import "static/scss/app.scss";
.container {
  width: 1160px;
  margin: 0 auto;
}
</style>
<script setup>
import HeaderNav from "@/components/HeaderNav.vue";
</script>