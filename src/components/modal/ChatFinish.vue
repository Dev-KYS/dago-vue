<template>
  <Transition name="modal">
    <div class="modal-mask" v-if="show">
      <div class="modal-container">
        <div class="modal-wrapper">
          <div class="modal-header">
            <label>김진한 전문가와<br>상담을 종료하시겠습니까?</label>
          </div>
          <div class="modal-body">
            <span>지금 상담을 종료하게 되면<br>더 이상 김진한 전문가와 채팅은 불가능합니다.</span>
          </div>
        </div>
        <div class="modal-footer">
          <div class="button-wrapper">
<!--            <custom-button text="종료하기" button-class="natural mid" />-->
            <button class="button" @click="$emit('close')">종료하기</button>
            <button class="button primary" @click="$emit('close')">아니오, 더 상담 진행해 볼게요</button>
<!--            <custom-button text="아니오, 더 상담 진행해 볼게요" button-class="primary mid" @click="$emit('close')"/>-->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "ChatFinish",
  components: {CustomButton},
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
          text-align: center;
          font-size: 26px;
          font-weight: bold;
          color: #1B1B1B;
        }
      }
      .modal-body {
        display: flex;
        height: 100%;
        span {
          margin: auto;
          text-align: center;
        }
        //.form-input-wrapper {
        //  .custom-input-group {
        //    &:not(:last-child) {
        //      margin-bottom: 23px;
        //    }
        //  }
        //}
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
      width: 100%;
      .button-wrapper {
        display: flex;
        //flex-direction: row;
        //justify-content: center;
        //align-items: center;
        .button {
          border-radius: 12px;
          height: 48px;
          background: white;
          border: 1px solid #424242;
          &.primary {
            width: 100%;
            background: #FF0099;
            color: white;
            border: 1px solid #FF0099;
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