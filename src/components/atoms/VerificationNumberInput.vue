<template>
<div class="custom-input-group">
  <div class="custom-input-group" :style="style">
    <label>{{ labelText }}</label>
    <div class="custom-verification-number-wrapper">
      <input :placeholder="placeholder">
      <span>2분 53초</span>
      <button>재전송</button>
    </div>
    <div class="custom-verification-desc-wrapper">
      <ul>
        <li>인증번호 입력시간을 연장하시려면 <router-link to="">시간연장누르기</router-link></li>
        <li>3분 이내로 인증번호(6자리)를 입력해주세요</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "VerificationNumberInput",
  props: {
    type: String,
    labelText: String,
    placeholder: String
  },
  computed: {
    style() {
      return 'width:' + this.width + 'px';
    }
  }
}
</script>

<style lang="scss">
.custom-input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: bold;
    color: #2C2C2C;
    font-size: 16px;
  }
  .custom-verification-number-wrapper {
    display: flex;
    flex-direction: row;
    border: 1px solid #F5F5F5;
    border-radius: 10px;
    box-sizing: border-box;
    input {
      flex: 3;
      border-radius: 10px;
      border: 0;
      background: transparent;
      font-size: 16px;
    }
    span {
      flex: 1;
      margin: auto;
      text-align: center;
    }
    button {
      flex: 1;
      border: 1px solid #F5F5F5;
      background: #949494;
      color: #FFF;
      border-radius: 10px;
    }
  }
  .custom-verification-desc-wrapper {
    ul {
      li {
        color: #6C6C6C;
        font-size: 14px;
        a {
          font-size: 14px;
          text-decoration: underline;
          color: red;
        }
      }
    }
  }
}
</style>