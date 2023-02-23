<template>
  <label for="agree" class="chk_box">
    <input type="checkbox" id="agree" checked="checked" />
    <span class="on"></span>
    {{ text }}
  </label>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    text: String,
  }
}
</script>

<style lang="scss">
.chk_box {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input[type="checkbox"] {
    display: none;
    &:checked + .on {
      background: #f86480;
    }
    &:checked + .on:after {
      display: block;
    }
  }
  .on {
    width: 20px;
    height: 20px;
    background: #ddd;
    position: absolute;
    top: 0;
    left: 0;
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
    &:after {
      width: 6px;
      height: 10px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      left: 6px;
      top: 2px;
    }
  }
}
</style>