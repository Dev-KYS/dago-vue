<template>
    <header-nav />

    <router-view></router-view>
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
import HeaderNav from "@/components/HeaderNav.vue";
</script>