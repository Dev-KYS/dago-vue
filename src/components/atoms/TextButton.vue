<template>
<button class="text-btn">{{ text }}</button>
</template>

<script>
export default {
  name: "TextButton",
  props: {
    text: String
  }
}
</script>

<style lang="scss">
.text-btn {
  background: transparent;
  border: none;
  color: #424242;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>