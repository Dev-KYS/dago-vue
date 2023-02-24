<template>
<div class="">
  <h3>{{ label }}</h3>
  <custom-textarea :type="type"/>
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
    width: 200
  }
}
</script>

<style scoped>

</style>