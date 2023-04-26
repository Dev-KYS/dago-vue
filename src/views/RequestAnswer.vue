<template>
  <div class="question-answer-container">
    <div class="request-content-wrapper">
      <h2>답변 보내기</h2>
      <div class="customer-profile">
        <img src="/assets/icons/default_avatar.png" />
        <div>
          <p>{{estimate.has_user.name}}</p>
          <span>고객님 요청서</span>
        </div>
      </div>
      <div class="request-contents-wrapper">
        <div class="contents-item">
          <span class="title">1. 세부 카테고리</span>
          <p class="contents">- {{estimate.has_category.title}}</p>
        </div>
        <div class="contents-item">
          <span class="title">2. 프로젝트 희망 마감일정</span>
          <p class="contents">- {{estimate.end_date}}</p>
        </div>
        <div class="contents-item">
          <span class="title">3. 지역 및 진행방식</span>
          <p class="contents">- {{estimate.has_city.fullname}}</p>
          <p class="contents">- {{estimate.has_proceed.title}}</p>
        </div>
        <div class="contents-item">
          <span class="title">4. 의뢰내용</span>
          <p class="contents" v-for="content in estimate.contents.split('\r\n')">- {{content}}</p>
        </div>
        <div class="contents-item">
          <span class="title">5. 참고자료</span>
          <p class="contents" v-for="file in estimate.has_attach">- {{file.has_file.origin_name}}</p>
        </div>
      </div>
    </div>
    <div class="question-answer-wrapper">
      <div class="question-form-wrapper">
        <div class="answer-item-title-wrapper">
          <h2>{{questionInputList[0].has_user.name}} 전문가의 질문</h2>
          <span><b>TIP</b>. 정확하고 상세한 견적과 원할한 프로젝트 진행을 위해 질문을 작성 해주세요.</span>
          <div class="question-list-wrapper">
            <answer-item v-for="(item, index) in questionInputList" :index="++index" :id="item.id" :question="item.question" @change-answer="changeAnswer"/>
          </div>
        </div>
        <div class="submit-wrapper">
          <button class="button natural mid">목록으로</button>
          <button class="button primary mid" @click="submitAnswer">답변보내기</button>
          <Teleport to="body">
            <request-complete :show="showSaveCompleteModal" @close="showSaveCompleteModal = false" msg="답변을 전문가에게 보냈습니다!" @complete-request="completeRequest"/>
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
// import {estimateQuestionStore} from 'vuex';
// import estimateQuestionStore from "@/store/modules/estimateQuestionStore.js";

export default {
  name: "RequestAnswer",
  components: {AnswerItem, RequestComplete, QuestionItem},
  setup() {
    // const {dispatch} = estimateQuestionStore()
    // dispatch('addQuestion')
  },
  props: {
    estimateId: String,
    userId: String
  },
  data() {
    return {
      estimate: {
        "contents": '',
        "has_attach":[{
          "has_file": {}
        }],
        "has_category": {},
        "has_city": {},
        "has_proceed": {},
        "has_user": {}
      },
      questionInputList: [{
        "has_user": {}
      }],
      answers: [],
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
    },
    getQuestions() {
      this.axios.get('/estimate_question/questions?estimate_id=' + this.$route.query.id + '&user_id=' + this.$route.query.user_id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.estimate = res.data.data.estimate
          this.questionInputList = res.data.data.questions
          for (const q of this.questionInputList) {
            this.answers.push({})
          }
        }
      }).catch(e => {

      })
    },
    changeAnswer(value) {
      // console.log(value.index + ' : ' +value.value)
      this.answers[value.index - 1] = {id: value.id, answer: value.value}
    },
    submitAnswer() {
      const formData = new FormData
      formData.append('answers', JSON.stringify(this.answers))
      this.axios.post('/estimate_question/answer', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.showSaveCompleteModal = true
        }
      }).catch(e => {

      })
    },
    completeRequest() {
      this.showSaveCompleteModal = false
      this.$router.push('/myrequest/list?id=' + this.$route.query.id)
    }
  },
  mounted() {
    this.getQuestions()
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