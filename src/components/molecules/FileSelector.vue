<template>
<div class="file-select-wrapper">
  <file-select-btn @click="chooseFile()" />
  <input type="file" hidden="hidden" id="document" />
  <div class="file-download-remove">
    <file-download-btn file-name="사업자등록증.pdf" />
    <text-button text="삭제" />
  </div>
</div>
</template>

<script>
import FileSelectBtn from "@/components/atoms/FileSelectBtn.vue";
import FileDownloadBtn from "@/components/atoms/FileDownloadBtn.vue";
import TextButton from "@/components/atoms/TextButton.vue";

export default {
  name: "FileSelector",
  components: {TextButton, FileDownloadBtn, FileSelectBtn},
  methods: {
    chooseFile: function () {
      document.getElementById('document').click()
    }
  }
}
</script>

<style lang="scss">
.file-select-wrapper {
  .file-download-remove {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>