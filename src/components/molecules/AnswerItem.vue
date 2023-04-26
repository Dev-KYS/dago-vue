<template>
  <div class="answer-item">
    <div class="index">Q{{index}}</div>
    <div class="answer-input-wrapper">
      <span>{{question}}</span>
      <textarea class="answer-input" :readonly="readOnly === true" @input="$emit('changeAnswer', {index: index, id: id, value: $event.target.value})">{{answer}}</textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerItem",
  props: {
    index: Number,
    question: String,
    answer: String,
    readOnly: false,
    id: Number
  },
  emits: [
    "changeAnswer"
  ]
}
</script>

<style lang="scss">
.answer-item {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  .index {
    color: #FF0099;
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
  }
  .answer-input-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    span {
      font-size: 14px !important;
      color: #6C6C6C !important;
    }
    .answer-input {
      border: 1px solid #6C6C6C;
      width: 540px;
      min-height: 48px;
      border-radius: 12px;
      padding: 8px 10px;
      box-sizing: border-box;
      resize: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

</style>