<template>
<div class="register-container">
  <h2>회원가입</h2>
  <div class="register-form">
    <div class="register-input-form">
      <div class="input-group">
        <span>이름</span>
        <input type="text" class="" v-model="name" placeholder="홍길동">
      </div>
      <div class="input-group">
        <span>휴대폰번호</span>
        <input type="text" class="" v-model="phone" placeholder="010-0000-0000">
      </div>
      <div class="input-group">
        <span>이메일</span>
        <input type="email" class="" v-model="email" placeholder="dareunkorea@email.com">
      </div>
      <div class="input-group">
        <span>비밀번호</span>
        <input type="password" class="" v-model="password" placeholder="영문+숫자 조합 8자리 이상 입력해주세요">
      </div>
      <div class="input-group">
        <span>비밀번호 확인</span>
        <input type="password" class="" v-model="password_confirmation" placeholder="비밀번호가 맞는지 확인해주세요">
      </div>
    </div>

    <div class="checkbox-form">
      <custom-checkbox text="전체동의" />
      <hr>
      <custom-checkbox text="(필수) 이용약관 동의" />
      <custom-checkbox text="(필수) 개인정보 수집 및 이용 동의" />
      <custom-checkbox text="(필수) 만 14세 이상입니다" />
    </div>

    <div class="button-wrapper">
      <button class="button primary mid" @click="registerSubmit()">회원가입</button>
    </div>
  </div>
</div>
</template>

<script>
import CustomCheckbox from "@/components/atoms/CustomCheckbox.vue";

export default {
  name: "Register",
  components: {CustomCheckbox},
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    registerCall() {
      console.log(this.name)
    },
    goToMain() {
      this.$router.push({
        name: 'Home'
      })
    },
    registerSubmit() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('password_confirmation', this.password_confirmation)
      formData.append('phone', this.phone)
      this.axios.post('/auth/register', formData, {
        "Access-Control-Allow-Origin": "*"
      }).then(res => {
        this.goToMain()
      }).catch((err) => {
        console.log(err)
      })
    }
  }
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
    .register-input-form {
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
  }
  .checkbox-form {
    margin: 50px 0 50px 0;
  }
  .button-wrapper {
    margin: 50px 0 50px 0;
  }
}
hr {
  border: 1px solid #E3E3E3;
}
</style>