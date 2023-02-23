<template>
<button @click="$emit('input', id)" :class="[active, 'tab']">
  {{ text }}
</button>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    id: Number,
    text: String,
    value: Number
  },
  computed: {
    active() {
      return this.value === this.id ? 'active' : false
    }
  }
}
</script>

<style lang="scss">

</style>