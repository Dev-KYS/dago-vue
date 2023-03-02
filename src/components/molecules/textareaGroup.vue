<template>
<div class="custom-input-group">
  <label>{{ label }}</label>
  <custom-textarea :rows="rows" :placeholder="placeholder"/>
</div>
</template>

<script>
import CustomTextarea from "@/components/atoms/CustomTextarea.vue";

export default {
  name: "textareaGroup",
  components: { CustomTextarea },
  props: {
    type: String,
    label: String,
    rows: Number,
    placeholder: String,
    width: 200
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
}
</style>
