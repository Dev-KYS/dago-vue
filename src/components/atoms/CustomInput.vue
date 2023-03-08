<template>
  <input class="custom-input" :type="type" :placeholder="placeholder" v-model="value" :value="parentValue"/>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: String,
    type: String,
    placeholder: String,
    parentValue: '',
  },
  mounted() {
    this.value = this.parentValue
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    onDataChanged() {
      this.$emit('child-input', this.value)
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
.custom-input {
  border: 1px solid #6C6C6C;
  background: white;
  border-radius: 10px;
  height: 40px;
  box-sizing: border-box;
  padding: 5px 12px;
}
</style>