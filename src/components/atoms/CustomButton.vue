<template>
<button class="button" :class="buttonClass" :type="type">{{ text }}</button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: String,
    type: String,
    buttonClass: String
  },
  computed: {

  }
}
</script>

<style lang="scss">
.button {
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.primary {
    background: #FF0099;
    color: white;
  }

  &.natural {
    background: white;
    border: 1px solid #424242;
  }

  &.small {
    //width: 75px;
    padding: 6px 11.5px;
    box-sizing: border-box;
    height: 32px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
  }

  &.mid {
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 20px;
    height: 48px;
    font-weight: bold;
    width: 100%;
  }
}
</style>