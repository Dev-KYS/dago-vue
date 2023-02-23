<template>
<input class="custom-input" :type="type" />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    type: String
  }
}
</script>

<style lang="scss">
.custom-input {
  border: 1px solid #6C6C6C;
  background: white;
  border-radius: 5px;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 12px;
}
</style>