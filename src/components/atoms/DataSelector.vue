<template>
<select class="custom-select" v-model="selectedData" :value="selectedData" @change="$emit('updateSelectedData', selectedData)">
  <option value="">선택해주세요</option>
  <option
    v-for="(item, index) in listData"
    :key="index"
    :value="item.id">{{ item.name }}</option>
</select>
</template>

<script>
export default {
  name: "DataSelector",
  props: {
    listData: Array
  },
  data() {
    return {
      selectedData: ''
    }
  }
}
</script>

<style lang="scss">
.custom-select {
  width: 140px;
  height: 40px;
  border-radius: 12px;
  text-align: center;
}
</style>