<template>
  <div class="question-create-container">
    <div class="request-content-wrapper">
      <h2>의뢰서 상세보기 및 질문등록</h2>
      <div class="customer-profile">
        <img src="/assets/icons/default_avatar.png" />
        <div>
          <p>김다른</p>
          <span>고객님 요청서</span>
        </div>
      </div>
      <div class="request-contents-wrapper">
        <div class="contents-item">
          <span class="title">1. 세부 카테고리</span>
          <p class="contents">- 사업계획서 작성</p>
        </div>
        <div class="contents-item">
          <span class="title">2. 프로젝트 희망 마감일정</span>
          <p class="contents">- 2023년 2월 3일</p>
        </div>
        <div class="contents-item">
          <span class="title">3. 지역 및 진행방식</span>
          <p class="contents">- 대전광역시 유성구</p>
          <p class="contents">- 제가 있는 곳으로 와주세요</p>
        </div>
        <div class="contents-item">
          <span class="title">4. 의뢰내용</span>
          <p class="contents">- 예비창업패키지 지원 희망합니다</p>
        </div>
        <div class="contents-item">
          <span class="title">5. 참고자료</span>
          <p class="contents">- 사업계획서 초안.hwp</p>
        </div>
      </div>
    </div>
    <div class="question-create-wrapper">
      <div class="question-form-wrapper">
        <div>
          <h2>질문 작성</h2>
          <span><b>TIP</b>. 정확하고 상세한 견적과 원할한 프로젝트 진행을 위해 질문을 작성 해주세요.</span>
          <div class="question-list-wrapper">
            <question-item :index="++index" :key="index" v-for="(item, index) in questionInputList" />
          </div>
          <div class="question-item-add-wrapper" v-show="questionInputList.length < 5">
            <button class="question-add-btn" @click="questionItemAdd">
              <img src="/assets/icons/plus_black.png"/>
              질문 추가
            </button>
          </div>
        </div>
        <div class="submit-wrapper">
          <button class="button primary mid" @click="showSaveCompleteModal = true">질문보내기</button>
          <Teleport to="body">
            <request-complete :show="showSaveCompleteModal" @close="showSaveCompleteModal = false" msg="질문을 고객에게 보냈습니다!"/>
          </Teleport>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionItem from "@/components/molecules/QuestionItem.vue";
import RequestComplete from "@/components/modal/RequestComplete.vue";

export default {
  name: "QuestionCreate",
  components: {RequestComplete, QuestionItem},
  data() {
    return {
      questionInputList: [],
      showSaveCompleteModal: false
    }
  },
  methods: {
    autoResize(event) {
      event.target.style.height = "auto"
      event.target.style.height = `${event.target.scrollHeight}px`
    },
    questionItemAdd() {
      this.questionInputList.push(QuestionItem)
    }
  },
}
</script>

<style lang="scss">
#app {
  background: #F9F9F9;
}
.question-create-container {
  background: #F9F9F9;
  width: 1160px;
  margin: 0 auto;
  padding-top: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .request-content-wrapper {
    h2 {
      color: #1B1B1B;
      font-size: 32px;
      font-weight: bold;
      margin: 0;
    }
    .customer-profile {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 34px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 5px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        p {
          margin: 0;
          color: #2C2C2C;
          font-size: 20px;
          font-weight: bold;
        }
        span {
          color: #2C2C2C;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .request-contents-wrapper {
      margin-top: 30px;
      .contents-item {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        .title {
          color: #585858;
          font-size: 12px;
        }
        .contents {
          color: #181818;
          font-size: 14px;
          padding-left: 10px;
          margin: 0;
        }
      }
    }
  }
  .question-create-wrapper {
    .question-form-wrapper {
      width: 760px;
      height: 700px;
      background: #FFFFFF;
      box-shadow: 0px 12px 24px rgba(207, 215, 226, 0.54);
      border-radius: 20px;
      padding: 30px 60px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #2C2C2C;
        margin: 0;
      }
      & > span {
        color: #585858;
        font-size: 12px;
        b {
          color: #FF0099;
        }
      }
      .question-list-wrapper {
        margin-top: 27px;
        .question-item {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
      .question-item-add-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
        .question-add-btn {
          width: 540px;
          height: 48px;
          background: white;
          text-align: left;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          border: 1px solid #C1C1C1;
          border-radius: 12px;
          padding: 15px 18px;
          box-sizing: border-box;
          cursor: pointer;
          img {
            width: 14px;
            margin-right: 10px;
          }
        }
      }
      .submit-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        .button {
          width: 160px;
          height: 48px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>