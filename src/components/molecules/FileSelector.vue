<template>
<div class="file-select-wrapper">
  <file-select-btn @click="chooseFile()" />
  <input type="file" hidden="hidden" id="document" @change="previewFiles"/>
  <div class="file-download-remove" v-for="item in selectFiles">
    <file-download-btn :file-name="item.name" />
    <text-button text="삭제" />
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
      selectFiles: []
    }
  },
  methods: {
    chooseFile: function () {
      document.getElementById('document').click()
    },
    previewFiles(event) {
      this.selectFiles = event.target.files;
      console.log(event.target.files);
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