<template>
<Transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-header">
        <h2>제공 서비스</h2>
      </div>
      <div class="modal-body">
        <p>대분류</p>
        <div class="first-category-list">
          <button class="category-item-btn">문서 및 글작성</button>
          <button class="">SW개발</button>
          <button class="">HW개발</button>
          <button class="">디자인</button>
          <button class="">마케팅</button>
          <button class="">경영지원</button>
        </div>
        <p>세부 카테고리</p>
        <div class="second-category-list">

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
export default {
  name: "CategorySelect",
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
    .modal-header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .modal-body {
      .first-category-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .category-item-btn {
          .category-item-btn {
            
          }
        }
      }
      .second-category-list {

      }
    }
  }
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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