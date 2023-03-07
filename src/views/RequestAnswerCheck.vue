<template>
  <div class="question-answer-container">
    <div class="request-content-wrapper">
      <h2>답변 상세보기</h2>
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
    <div class="question-answer-wrapper">
      <div class="question-form-wrapper">
        <div class="answer-item-title-wrapper">
          <h2>김진한 전문가의 질문</h2>
          <span><b>TIP</b>. 상세 견적 금액을 보내고 고객님과 거래를 진행해 보세요.</span>
          <div class="question-list-wrapper">
            <answer-item v-for="(item, index) in questionInputList" :index="++index" :question="item.title" :answer="item.answer" :read-only="true"/>
          </div>
        </div>
        <div class="submit-wrapper">
          <button class="button natural small">목록으로</button>
          <button class="button primary small" @click="showDetailedEstimateModal = true">상세견적 보내기</button>
          <Teleport to="body">
            <detailed-estimate :show="showDetailedEstimateModal" @close="showDetailedEstimateModal = false"/>
          </Teleport>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestComplete from "@/components/modal/RequestComplete.vue";
import QuestionItem from "@/components/molecules/QuestionItem.vue";
import AnswerItem from "@/components/molecules/AnswerItem.vue";
import DetailedEstimate from "@/components/modal/DetailedEstimate.vue";

export default {
  name: "RequestAnswerCheck",
  components: {DetailedEstimate, AnswerItem, RequestComplete, QuestionItem},
  data() {
    return {
      questionInputList: [
        {id: 1, title: '몇 장 작성을 원하시나요?', answer: '5페이지'},
        {id: 2, title: '아이템에 대해서 간단히 설명해주세요.', answer: '미생물을 활용한 음식물쓰레기 처리와 관련된 아이템입니다.'}
      ],
      showSaveCompleteModal: false,
      showDetailedEstimateModal: false
    }
  }
}
</script>

<style lang="scss">
#app {
  background: #F9F9F9;
}
.question-answer-container {
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
  .question-answer-wrapper {
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
      .answer-item-title-wrapper {
        h2 {
          font-weight: bold;
          font-size: 24px;
          line-height: 36px;
          color: #2C2C2C;
          margin: 0;
        }
        span {
          color: #585858;
          font-size: 12px;
          b {
            color: #FF0099;
          }
        }
        .question-list-wrapper {
          margin-top: 27px;
          .answer-item {
            &:not(:last-child) {
              margin-bottom: 10px;
            }
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
          margin-left: 10px;
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