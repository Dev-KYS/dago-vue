<template>
<div class="register-container">
  <h2>회원가입</h2>
  <div class="register-form">
    <div class="input-group">
      <span>이름</span>
      <input type="text" class="">
    </div>
    <div class="input-group">
      <span>이메일</span>
      <input type="text" class="">
    </div>
    <div class="input-group">
      <span>비밀번호</span>
      <input type="text" class="">
    </div>
    <div class="input-group">
      <span>비밀번호 확인</span>
      <input type="text" class="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style lang="scss">
.register-container {
  padding-top: 112px;
  display: flex;
  width: 400px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .register-form {
    width: 100%;
    margin-top: 40px;
    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      &:not(:first-child) {
        margin-top: 20px;
      }
      span {
        font-weight: bold;
        font-size: 16px;
        color: #2C2C2C;
        margin-bottom: 10px;
      }
      input {
        height: 46px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #C3C3C3;
        padding: 11px 21px;
        box-sizing: border-box;
      }
    }
  }
}
</style>