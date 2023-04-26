<template>
  <Transition name="modal">
    <div class="modal-mask" v-if="show">
      <div class="modal-container">
        <div class="modal-wrapper">
          <div class="modal-header">
            <label>신고하기</label>
          </div>
          <div class="modal-body">
            <span>전문가를 신고하는 이유를 작성해주세요</span>
            <div class="form-input-wrapper">
              <custom-textarea :rows="5" style="width: 100%"/>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="button-wrapper">
            <custom-button text="신고하기" button-class="primary mid"/>
            <custom-button text="취소" button-class="natural mid" @click="$emit('close')" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import CustomInput from "@/components/atoms/CustomInput.vue";
import CustomTabInputGroup from "@/components/atoms/CustomTabInputGroup.vue";
import CustomTextarea from "@/components/atoms/CustomTextarea.vue";

export default {
  name: "ChatReport",
  components: {CustomTextarea, CustomTabInputGroup, CustomInput, CustomButton},
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
    .modal-wrapper {
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

      .bill-publish {
        margin-top: 23px;
        p {
          font-size: 16px;
          font-weight: bold;
          color: #2C2C2C;
        }
      }

      .attach-wrapper {
        margin-top: 23px;
        p {
          font-size: 16px;
          font-weight: bold;
          color: #2C2C2C;
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

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>