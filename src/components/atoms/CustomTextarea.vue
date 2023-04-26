<template>
  <textarea :rows="rows" v-model="value" :placeholder="placeholder" @input="onDateChanged">{{parentValue}}</textarea>
</template>

<script>
export default {
  name: "CustomTextarea",
  props: {
    rows: Number,
    placeholder: String,
    parentValue: ''
  },
  mounted() {
    this.value = this.parentValue
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onDateChanged() {
      this.$emit('child-input', this.value)
    }
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
