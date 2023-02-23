<template>
<Transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-header">
        <h2>사업자 등록증 입력</h2>
      </div>
      <div class="modal-body">
        <input-group label-text="사업자 이름" type="text" />
        <input-group label-text="사업자 등록번호" type="text" />
        <input-group label-text="직원 수" type="number" />

        <div class="bill-publish">
          <button>여</button>
          <button>부</button>
        </div>
        <div class="attach-wrapper">
          <button>+ 첨부하기</button>
        </div>
      </div>
      <div class="modal-footer">
        <div class="button-wrapper">
          <button class="">저장하기</button>
          <button class="" @click="$emit('close')">취소</button>
        </div>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
import CustomInput from "@/components/atoms/CustomInput.vue";
import InputGroup from "@/components/molecules/InputGroup.vue";

export default {
  name: "CompanyInfoCreate",
  components: {InputGroup, CustomInput},
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

    .modal-header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .modal-body {

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