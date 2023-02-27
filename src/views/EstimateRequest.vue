<template>
  <div class="container">
    <div class="estimate-request-container">
      <div class="step-menu-wrapper">
        <h1>프로젝트 의뢰서 작성</h1>
        <ul class="step-menu">
          <li class="active">1. 세부카테고리</li>
          <li>2. 프로젝트 일정 및 견적요청 마감시간</li>
          <li>3. 지역 및 진행방식</li>
          <li>4. 의뢰내용</li>
          <li>5. 참고내용</li>
          <li>6. 의뢰내용 요청 및 확인</li>
          <li>프로젝트 등록 완료</li>
        </ul>
      </div>
      <div class="content-wrapper">
        <div class="content-backdrop">
          <div class="step-wrapper step-01" v-show="step === 1">
            <h4 class="step-title">세부 카테고리<span class="required">(필수)</span></h4>
            <div class="category-select">
              <button class="button natural mid">카테고리 선택</button>
            </div>
            <div class="button-wrapper">
              <button class="button primary mid next-btn" @click="step = 2">
                다음
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6281 8H0.201172" stroke="white" stroke-width="2.2"/>
                  <path d="M7.46367 0.5L5.70117 2.2625L11.4262 8L5.70117 13.7375L7.46367 15.5L14.9637 8L7.46367 0.5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="step-wrapper step-02" v-show="step === 2">
            <h4 class="step-title">프로젝트 일정 및 견적요청 마감시간<span class="required">(필수)</span></h4>
            <div class="end-date-wrapper">
              <p>희망 프로젝트 마감일</p>
              <Datepicker
                  v-model="picked"
                  :locale="locale"
                  :week-starts-on="0"
                  :input-format="inputFormat"
                  class="date-input"
              />
            </div>
            <div class="end-time-wrapper">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import Datepicker from 'vue3-datepicker'
import { ref, reactive } from 'vue'
import { ko } from 'date-fns/locale'

export default {
  name: "EstimateRequest",
  components: {CustomButton, Datepicker},
  setup() {
    const picked = ref(new Date())
    const locale = reactive(ko)
    const inputFormat = ref('yyyy-MM-dd')

    return {
      picked,
      locale,
      inputFormat
    }
  },
  data() {
    return {
      step: 1
    }
  }
}
</script>

<style lang="scss">
body {
  background: #eeeeee;
}
.estimate-request-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  box-sizing: border-box;
  margin-bottom: 400px;
  //background: #eeeeee;
  .step-menu-wrapper {
    & > h1 {
      font-size: 32px;
      font-weight: bold;
    }
    .step-menu {
      list-style: none;
      padding: 0;
      margin: 40px 0 0 0;
      li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        padding-left: 17px;
        &.active {
          border-left: 2px solid #FF0099;
          color: #FF0099;
          font-weight: bold;
        }
        height: 44px;
        border-left: 2px solid #C1C1C1;
      }
    }
  }
  .content-wrapper {
    .content-backdrop {
      width: 760px;
      border-radius: 20px;
      background: white;
      box-shadow: 0px 12px 24px 0px rgba(207, 215, 226, 0.54);
      padding: 30px 60px;
      box-sizing: border-box;
      .step-wrapper {
        &.step-01 {
          .category-select {
            margin: 50px 0 164px;
            .button {
              width: 132px;
              font-size: 14px;
              font-weight: normal;
            }
          }
        }
        &.step-02 {
          .date-input {
            border: 1px solid #6C6C6C;
            background: white;
            border-radius: 5px;
            height: 40px;
            box-sizing: border-box;
            padding: 5px 12px;
          }
        }
        .step-title {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
          .required {
            font-size: 14px;
            color: #FF0099;
            font-weight: bold;
          }
        }
        .button-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          .next-btn {
            width: 160px;
            position: relative;
            svg {
              position: absolute;
              right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>