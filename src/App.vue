<template>
    <header-nav />

    <router-view></router-view>

  <footer-nav></footer-nav>
</template>

<style lang="scss">
@import "static/scss/app.scss";
.container {
  width: 1160px;
  margin: 0 auto;
}
body {
  margin: 0;
}
</style>
<script setup>
import HeaderNav from "@/components/organisms/HeaderNav.vue";
import FooterNav from "@/components/organisms/FooterNav.vue";
</script>