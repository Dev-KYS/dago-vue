<template>
<div class="custom-input-group" :style="style">
  <label>{{ labelText }}</label>
  <custom-input :type="type" />
</div>
</template>

<script>
import CustomInput from "@/components/atoms/CustomInput.vue";

export default {
  name: "InputGroup",
  components: {CustomInput},
  props: {
    type: String,
    labelText: String,
    width: 200
  },
  computed: {
    style() {
      return 'width:' + this.width + 'px';
    }
  }
}
</script>

<style lang="scss">
.custom-input-group {
  display: flex;
  flex-direction: column;
  width: 100px;
  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #2C2C2C;
    font-size: 16px;
  }
  input {
    border: 1px solid #6C6C6C;
    height: 45px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
  }
}
</style>