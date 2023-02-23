<template>
<button class="file-select-btn">
  <img src="/assets/icons/plus_black.png" />
  첨부하기
</button>
</template>

<script>
export default {
  name: "FileSelectBtn"
}
</script>

<style lang="scss">
.file-select-btn {
  border: 1px solid #2C2C2C;
  border-radius: 12px;
  height: 40px;
  width: 100px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  img {
    width: 12px;
    margin-right: 12px;
  }
}
</style>