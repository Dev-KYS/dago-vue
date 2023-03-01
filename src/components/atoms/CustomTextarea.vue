<template>
  <textarea :rows="rows" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
  name: "CustomTextarea",
  props: {
    rows: Number,
    placeholder: String
  }
}
</script>

<style lang="scss">
textarea {
  border: 1px solid #F5F5F5;
  background: white;
  border-radius: 5px;
  //height: 40px;
  box-sizing: border-box;
  padding: 5px 12px;
  resize: none;
}
</style>
