<template>
  <div class="question-item">
    <div class="index">Q{{index}}</div>
    <textarea class="question-input" @input="autoResize"></textarea>
    <button class="remove-btn">
      <img src="/assets/icons/close_gray.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "QuestionItem",
  props: {
    index: Number,
  }
}
</script>

<style lang="scss">
.question-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 100%;
  &:hover {
    .remove-btn {
      display: block;
    }
  }
  .index {
    color: #FF0099;
    font-size: 20px;
    font-weight: bold;
    margin-right: 33px;
  }
  .question-input {
    border: 1px solid #6C6C6C;
    width: 540px;
    min-height: 48px;
    border-radius: 12px;
    padding: 8px 10px;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .remove-btn {
    display: none;
    position: absolute;
    right: 5px;
    top: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    img {
      width: 19.8px;
      height: 19.8px;
    }
  }
}

</style>