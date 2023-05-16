<template>
  <Transition name="modal">
    <div class="sign-modal-mask" v-if="show">
      <div class="sign-modal-container">
        <div class="sign-modal-content-wrapper">
          <div class="sign-modal-header">
            <label>서명하기</label>
          </div>
          <div class="sign-modal-body">
            <div class="sign-canvas-wrapper">
              <vue-drawing-canvas class="sign-canvas" width="440" height="180" lineCap="round" lineJoin="round" v-model:image="signImage" saveAs="png"/>
            </div>
            <div>
              <q-checkbox v-model="right" label="다음에도 이 서명을 사용하는 데 동의합니다" color="#FF0099"/>
<!--              <check-box-button text="다음에도 이 서명을 사용하는 데 동의합니다"/>-->
            </div>
          </div>
        </div>
        <div class="sign-modal-footer">
          <div class="button-wrapper">
            <custom-button type="button" text="저장하기" button-class="primary mid" @click="signed"/>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import VueDrawingCanvas from "vue-drawing-canvas";
import CheckBoxButton from "@/components/atoms/CheckBoxButton.vue";

export default {
  name: "Sign",
  components: {CheckBoxButton, VueDrawingCanvas, CustomButton},
  emits: [
      'signClose'
  ],
  props: {
    show: Boolean
  },
  data() {
    return {
      right: false,
      signImage: {}
    }
  },
  methods: {
    signed() {
      var file = this.dataURLtoFile(this.signImage, 'sign.png')
      this.$emit('signClose', file)
      this.$emit('close')
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
    }
  }
}
</script>

<style lang="scss">
.sign-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .sign-modal-container {
    width: 500px;
    height: 400px !important;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .sign-modal-content-wrapper {
      width: 100%;
      .sign-modal-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        label {
          font-size: 26px;
          font-weight: bold;
          color: #1B1B1B;
        }
      }
      .sign-modal-body {
        .sign-canvas-wrapper {
          border: 1px solid #181818;
          width: 440px;
          height: 180px;
          .sign-canvas {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .sign-modal-footer {
      .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .button {
          width: 160px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>