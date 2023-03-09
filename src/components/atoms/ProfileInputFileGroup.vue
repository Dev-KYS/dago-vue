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
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.image_1.path === ''">
          <img :src="'http://localhost:8000/storage/' + picVideoList.image_1.path" v-if="picVideoList.image_1.path !== ''">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.image_2.path === ''">
          <img :src="'http://localhost:8000/storage/' + picVideoList.image_2.path" v-if="picVideoList.image_2.path !== ''">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.image_3.path === ''">
          <img :src="'http://localhost:8000/storage/' + picVideoList.image_3.path" v-if="picVideoList.image_3.path !== ''">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.image_4.path === ''">
          <img :src="'http://localhost:8000/storage/' + picVideoList.image_4.path" v-if="picVideoList.image_4.path !== ''">
        </div>
      </div>
      <div class="document-input-file-empty">
        <div class="document-input-img-wrapper">
          <img src="/assets/icons/default_upload_img.png" v-if="picVideoList.image_5.path === ''">
          <img :src="'http://localhost:8000/storage/' + picVideoList.image_5.path" v-if="picVideoList.image_5.path !== ''">
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
  },
  created() {
    this.picVideoList = this.$store.getters.getProfilePic
  },
  setup() {
    const {dispatch} = useStore()
    dispatch('getProfilePicAction')
  },
  computed: {
    getInitData() {
      // console.log(this.$store.getters.getProfilePic)
      // this.image_1 = this.$store.getters.getProfilePic.image_1
      // this.image_2 = this.$store.getters.getProfilePic.image_2
      // this.image_3 = this.$store.getters.getProfilePic.image_3
      // this.image_4 = this.$store.getters.getProfilePic.image_4
      // this.image_5 = this.$store.getters.getProfilePic.image_5
      // this.picVideoList.image_1 = this.image_1

      return this.picVideoList = this.$store.getters.getProfilePic
    }
  },
  mounted() {

  },
  watch: {
    // imageList(val) {
    //   console.log(this.imageList.image_1.path)
    //   this.picVideoList = val
    // },
  },
  methods: {
    picVideoList(val) {
      // console.log(this.picVideoList.image_1.path)
    }
  },
  data() {
    return {
      picVideoList: Object
    }
  },
  emits: [
      'fileInputGroupListener'
  ],
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