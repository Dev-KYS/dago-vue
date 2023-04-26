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
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.has_image1 === null">
          <img v-if="picVideoList.has_image1 !== null" :src="'http://localhost:8000/storage/' + picVideoList.has_image1.hash_name">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.has_image2 === null">
<!--          <img :src="'http://localhost:8000/storage/' + picVideoList.has_image2.hash_name" v-if="picVideoList.image_2_id !== null">-->
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.has_image3 === null">
<!--          <img :src="'http://localhost:8000/storage/' + picVideoList.has_image3.hash_name" v-if="picVideoList.image_3_id !== null">-->
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.has_image4 === null">
<!--          <img :src="'http://localhost:8000/storage/' + picVideoList.has_image4.hash_name" v-if="picVideoList.image_4_id !== null">-->
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.has_image5 === null">
<!--          <img :src="'http://localhost:8000/storage/' + picVideoList.has_image5.hash_name" v-if="picVideoList.image_5_id !== null">-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import {useStore} from "vuex";

export default {
  name: "ProfilePicVideoFileGroup",
  props: {
    label: String,
    type: String,
    parentFiles: Object
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
      picVideoList: { has_image1: null, has_image2: null, has_image3: null, has_image4: null, has_image5: null }
    }
  },
  emits: [
      'fileInputGroupListener'
  ],
  watch: {
    parentFiles: {
      handler(val, oldVal) {
        // console.log(val)
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