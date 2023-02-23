<template>
<Transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-wrapper">
        <div class="modal-header">
          <h2>사업자 등록증 입력</h2>
        </div>
        <div class="modal-body">
          <div class="form-input-wrapper">
            <input-group label-text="사업자 이름" type="text" width="133" />
            <input-group label-text="사업자 등록번호" type="text" width="210" />
            <input-group label-text="직원 수" type="number" width="133" />
          </div>

          <div class="bill-publish">
            <p>세금 계산서 발행 여부</p>
            <check-box-button text="여" />
            <check-box-button text="부" />
          </div>
          <div class="attach-wrapper">
            <p>사업자 등록증 첨부</p>
            <file-selector />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="button-wrapper">
          <custom-button text="저장하기" button-class="primary mid" />
          <custom-button text="취소" button-class="natural mid" @click="$emit('close')" />
        </div>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
import CustomInput from "@/components/atoms/CustomInput.vue";
import InputGroup from "@/components/molecules/InputGroup.vue";
import FileSelector from "@/components/molecules/FileSelector.vue";
import CheckBoxButton from "@/components/atoms/CheckBoxButton.vue";
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "CompanyInfoCreate",
  components: {CustomButton, CheckBoxButton, FileSelector, InputGroup, CustomInput},
  props: {
    show: Boolean
  },
  data() {
    isBillActive: false
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
    height: 700px;
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