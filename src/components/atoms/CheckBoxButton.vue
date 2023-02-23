<template>
  <button class="check-btn" :class="{'active': isActive === true}">{{ text }}</button>
</template>

<script>
export default {
  name: "CheckBoxButton",
  props: {
    text: String,
    active: Boolean
  },
  data() {
    return {
      isActive: this.active
    }
  },
  watch: {
    active() {
      this.isActive = this.active
    }
  }
}
</script>

<style lang="scss">
.check-btn {
  width: 100px;
  height: 40px;
  background: white;
  border-radius: 10px;
  border: 1px solid #000000;
  cursor: pointer;
  &.active {
    color: #FF0099;
    border: 1px solid #FF0099;
    font-weight: bold;
  }
}
</style>