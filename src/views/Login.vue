<template>
<div class="login-container">
  <h2>로그인</h2>
  <div class="login-form">
    <div class="login-input-form">
      <div class="input-group">
        <span>이메일</span>
        <input type="email" class="" v-model="email" placeholder="dareunkorea@email.com">
      </div>
      <div class="input-group">
        <span>비밀번호</span>
        <input type="password" class="" v-model="password">
      </div>
    </div>
    <div class="button-wrapper">
      <button class="button primary mid" @click="loginSubmit()">이메일로 로그인</button>
    </div>
    <div class="sign-in-wrapper">
      <div class="sign-in-container">
        <span><router-link to="">비밀번호 찾기</router-link></span>
        <span><router-link to="/auth/register">회원가입</router-link></span>
      </div>
<!--      <ul>-->
<!--        <li><router-link to="">비밀번호 찾기</router-link></li>-->
<!--        <li><router-link to="/auth/register">회원가입</router-link></li>-->
<!--      </ul>-->
    </div>
    <div class="sns-login-wrapper">
      <img src="/assets/icons/kakao_login_button.png">
      <img src="/assets/icons/naver_login_button.png">
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
  },
  methods: {
    loginSubmit() {
      const formData = new FormData()
      formData.append('email', this.email)
      formData.append('password', this.password)
      this.axios.post('/auth/login', formData).then(res => {
        let token = res.data.authorisation.token
        localStorage.setItem('access_token', token)
        this.$store.dispatch('getAccountInfo')
        this.$router.push({
          name: 'Home'
        })
      })
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
        input::placeholder {
          color: #AEAEAE;
        }
      }
    }

    .button-wrapper {
      margin: 50px 0 20px 0;
    }
    .sign-in-wrapper {
      display: flex;
      .sign-in-container {
        margin: auto;
        span:nth-child(n+2) {
          position: relative;
          margin-left: 20px;
          padding-left: 20px;
        }
        span:nth-child(n+2)::after {
          position:absolute;
          left: 0;
          top: 3px;
          content: "";
          width: 1px;
          height: 15px;
          background-color: #D2D2D2;
        }
        span{
          a {
            font-size: 14px;
            color: #757575;
          }
        }
      }
    }
    .sns-login-wrapper {
      width: 100%;
      margin: 70px 0;
      img {
        width: 100%;
        align-self: center;
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>