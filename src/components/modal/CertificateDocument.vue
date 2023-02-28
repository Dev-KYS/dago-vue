<template>
<transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-content-wrapper">
        <div class="modal-header">
          <label>자격증 및 기타서류</label>
        </div>
        <div class="modal-body">
          <profile-input-file-group/>
        </div>
      </div>
      <div class="modal-footer">
        <div class="button-wrapper">
          <custom-button type="button" text="저장하기" button-class="primary mid" />
          <custom-button type="button" text="취소" button-class="natural mid" @click="$emit('close')"/>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import ProfileInputFileGroup from "@/components/atoms/ProfileInputFileGroup.vue";

export default {
  name: "CertificateDocument",
  components: {ProfileInputFileGroup, CustomButton},
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;

  .modal-container {
    width: 500px;
    height: 750px !important;
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

    .modal-content-wrapper {
      width: 100%;

      .modal-header {
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

      .modal-body {
        .form-input-wrapper {
          .custom-input-group {
            &:not(:last-child) {
              margin-bottom: 23px;
            }
          }
        }
      }
    }
    .modal-footer {
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