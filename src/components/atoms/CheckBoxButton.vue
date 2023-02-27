<template>
  <button class="check-btn" :class="{'active': active === true}">{{ text }}</button>
</template>

<script>
export default {
  name: "CheckBoxButton",
  props: {
    text: String,
    active: Boolean,
    billCheckButtonClick: Function
  },
  data() {
    return {

    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.check-btn {
  width: 100px;
  height: 40px;
  font-weight: bold;
  background: white;
  border-radius: 10px;
  border: 1px solid #000000;
  margin-right: 10px;
  cursor: pointer;
  &.active {
    color: #FF0099;
    border: 1px solid #FF0099;
  }
}
</style>