<template>
<div class="file-select-wrapper">
  <file-select-btn @click="chooseFile()" />
  <input type="file" hidden="hidden" id="document" @change="previewFiles"/>
  <div class="file-download-remove" v-show="this.selectFiles">
    <file-download-btn :file-name="this.selectFiles.name" />
    <text-button text="삭제" @click="removeFile()"/>
  </div>
</div>
</template>

<script>
import FileSelectBtn from "@/components/molecules/FileSelectBtn.vue";
import FileDownloadBtn from "@/components/atoms/FileDownloadBtn.vue";
import TextButton from "@/components/atoms/TextButton.vue";

export default {
  name: "FileSelector",
  components: {TextButton, FileDownloadBtn, FileSelectBtn},
  data() {
    return {
      selectFiles: ''
    }
  },
  methods: {
    chooseFile: function () {
      document.getElementById('document').click()
    },
    previewFiles(event) {
      this.selectFiles = event.target.files[0];
      this.$emit('child-file', this.selectFiles)
    },
    removeFile() {
      // 한개는 상관없는데 multiple 문제될 듯
      this.selectFiles = ''
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
    margin-top: 10px;
  }
}
</style>