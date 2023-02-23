<template>
  <button class="file-download-btn">{{ fileName }}</button>
</template>

<script>
export default {
  name: "FileDownloadBtn",
  props: {
    fileName: String
  }
}
</script>

<style lang="scss">
.file-download-btn {
  background: transparent;
  border: none;
  font-weight: bold;
  text-decoration: underline;
  font-size: 14px;
  text-underline-offset: 5px;
  cursor: pointer;
}
</style>