<template>
<div class="login-container">
  <h2>로그인</h2>
  <div class="login-form">
    <div class="login-input-form">
      <div class="input-group">
        <span>이메일</span>
        <input type="email" class="" v-model="email">
      </div>
      <div class="input-group">
        <span>비밀번호</span>
        <input type="password" class="" v-model="password">
      </div>
    </div>
    <button class="button primary mid">이메일로 로그인</button>
    <div class="">
      <ul>
        <li><router-link to="">비밀번호 찾기</router-link></li>
        <li><router-link to="/auth/register">회원가입</router-link></li>
      </ul>
    </div>
    <div class="">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  }
}
</script>

<style lang="scss">
.login-container {
  padding-top: 112px;
  display: flex;
  width: 400px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 100%;
    margin-top: 40px;
    .login-input-form {
      width: 100%;
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
}
</style>