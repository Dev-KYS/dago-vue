<template>
  <div class="tab-contents-item">
    <div class="title-label-wrapper">
      <label>{{label}}</label>
      <p>필수</p>
    </div>
    <textarea rows="5" :placeholder="desc">{{ text }}</textarea>
  </div>
</template>

<script>
export default {
  name: "CustomTabInputGroup",
  props: {
    label: String,
    desc: String,
    text: String
  }
}
</script>

<style lang="scss">
.tab-contents-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px 15px;
  textarea {
    //max-width: 95%;
    //width: 100%;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    resize: none;
  }
}
</style>