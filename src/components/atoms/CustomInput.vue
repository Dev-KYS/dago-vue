<template>
  <input class="custom-input" :type="type" :placeholder="placeholder"/>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: String,
    type: String,
    placeholder: String
  }
}
</script>

<style lang="scss">
.custom-input {
  border: 1px solid #6C6C6C;
  background: white;
  border-radius: 10px;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 12px;
}
</style>