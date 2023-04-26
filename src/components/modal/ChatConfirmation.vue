<template>
  <Transition name="modal">
    <div class="modal-mask" v-if="show">
      <div class="modal-container">
        <div class="modal-wrapper">
          <div class="modal-header">
            <label>의뢰 확정하기</label>
          </div>
          <div class="modal-body">
            <span>‘김대표’에는 고객님의 편의를 위해 <b>전자계약</b> 기능이 있습니다.<br>전자계약을 채결하고 의뢰를 진행하면<br>법적으로 금전, 지식재산권 등의 보호를 받을 수 있습니다.</span>
            <p>전자계약을 채결하시겠습니까?</p>
          </div>
        </div>
        <div class="modal-footer">
          <div class="button-wrapper">
            <custom-button text="네, 안전하게 전자계약 후 진행할래요" button-class="primary mid" @click="confirm"/>
            <custom-button text="아니오, 그냥 진행하겠습니다" button-class="natural mid" @click="$emit('close')" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "ChatConfirmation",
  components: {CustomButton},
  emits: [
      'confirm'
  ],
  props: {
    show: Boolean
  },
  methods: {
    confirm() {
      this.$emit('close')
      this.$emit('confirm')
    }
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
        display: flex;
        flex-direction: column;
        span {
          b {
            font-weight: bold;
            color: #FF0099;
          }
        }
        p {
          font-weight: bold;
          text-align: center;
        }
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .button {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 5px;
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