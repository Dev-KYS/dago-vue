<template>
<div class="custom-input-group" :style="style">
  <label>{{ labelText }}</label>
  <custom-input :type="type" :placeholder="placeholder" :parent-value="parentValue" @child-input="onDataChanged" v-model="value" @input="onDataChangedEmit"/>
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
    placeholder: String,
    width: 200,
    parentValue: '',
  },
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.value = this.parentValue
  },
  methods: {
    onDataChanged(newData) {
      this.value = newData
    },
    onDataChangedEmit() {
      this.$emit('child-input', this.value)
    }
  },
  computed: {
    style() {
      return 'width:' + this.width + 'px';
    }
  },
  watch: {
    parentValue(val) {
      this.value = val
    }
  }
}
</script>

<style lang="scss">
.custom-input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: bold;
    color: #2C2C2C;
    font-size: 16px;
  }
  input {
    border: 1px solid #F5F5F5;
    height: 45px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
  }
}
</style>