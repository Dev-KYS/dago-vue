<template>
  <div class="document-input-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>{{label}}</label>
      </div>
    </div>
    <div class="document-input-file-field">
      <div class="document-input-file-add">
        <div class="document-input-img-wrapper" @click="$emit('fileInputGroupListener', type)">
          <img src="/assets/icons/plus_icon.png">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length < 1">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length > 0 && picVideoList[0].has_doc_file.type.indexOf('image/') === -1">
          <img :src="'http://localhost:8000/storage/' + picVideoList[0].has_doc_file.hash_name" v-if="picVideoList.length > 0 && picVideoList[0].has_doc_file.type.indexOf('image/') > -1">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length < 2">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length > 1 && picVideoList[1].has_doc_file.type.indexOf('image/') === -1">
          <img :src="'http://localhost:8000/storage/' + picVideoList[1].has_doc_file.hash_name" v-if="picVideoList.length > 1 && picVideoList[1].has_doc_file.type.indexOf('image/') > -1">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length < 3">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length > 2 && picVideoList[2].has_doc_file.type.indexOf('image/') === -1">
          <img :src="'http://localhost:8000/storage/' + picVideoList[2].has_doc_file.hash_name" v-if="picVideoList.length > 2 && picVideoList[2].has_doc_file.type.indexOf('image/') > -1">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length < 4">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length > 3 && picVideoList[3].has_doc_file.type.indexOf('image/') === -1">
          <img :src="'http://localhost:8000/storage/' + picVideoList[3].has_doc_file.hash_name" v-if="picVideoList.length > 3 && picVideoList[3].has_doc_file.type.indexOf('image/') > -1">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length < 5">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.length > 4 && picVideoList[4].has_doc_file.type.indexOf('image/') === -1">
          <img :src="'http://localhost:8000/storage/' + picVideoList[4].has_doc_file.hash_name" v-if="picVideoList.length > 4 && picVideoList[4].has_doc_file.type.indexOf('image/') > -1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import {useStore} from "vuex";

export default {
  name: "ProfileInputFileGroup",
  props: {
    label: String,
    type: String,
    parentFiles: []
  },
  created() {
    // this.picVideoList = this.$store.getters.getProfilePic
  },
  setup() {
    const {dispatch} = useStore()
    dispatch('getProfilePicAction')
  },
  data() {
    return {
      picVideoList: []
    }
  },
  emits: [
      'fileInputGroupListener'
  ],
  watch: {
    parentFiles: {
      handler(val, oldVal) {
        this.picVideoList = val
      }
    }
    // parentFiles(val) {
    //   console.log(val)
    //   this.picVideoList = val
    // }
  },
}
</script>

<style lang="scss">
.document-input-wrapper {
  margin-top: 50px;
  width: 100%;
  .document-input-file-field {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .document-input-file-add {
      flex: 1 1 16%;
      margin: 10px;
      background: #FFFFFF;
      border-radius: 10px;
      border: 1px solid #FF0099;
      color: #FF0099;
      position: relative;
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      .document-input-img-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        img {
          margin: auto;
          width: 20%;
          height: 20%;
        }
      }
    }
    .document-input-file-empty {
      width: 115px;
      height: 115px;
      margin: 10px;
      border-radius: 10px;
      border: 0;
      background: #F9F9F9;
      display: flex;
      position: relative;
      .document-input-img-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        img {
          margin: auto;
          width: 45%;
          height: 45%;
        }
      }
    }
  }
}
.title-label-wrapper {
  display: flex;
  margin: auto 0;
  label {
    font-weight: bold;
    margin: auto 0 0 5px;
    color: #2C2C2C;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: #FF4040;
    margin: auto 10px 0 5px;
  }
  img {
    width: 15px;
    height: 15px;
    margin: auto 5px 0 5px;
  }
  span {
    font-size: 12px;
    margin: auto auto 0 0;
  }
}
</style>