<template>
<div class="my-request-estimate-container">
  <div class="title-wrapper">
    <h1>{{estimate.has_category.title}}</h1>
    <span>3시간 후 견적마감</span>
  </div>
  <div class="estimate-action-wrapper">
    <button class="button natural small" @click="showRequestModal = true">내 요청서 보기</button>
    <Teleport to="body">
      <my-request-contents :show="showRequestModal" :estimate-id="$route.query.id" @close="showRequestModal = false"/>
    </Teleport>
    <button class="button natural small" @click="showRequestClosingModal = true">의뢰 마감하기</button>
    <Teleport to="body">
      <my-request-closing :types="finishTypes" :show="showRequestClosingModal" @close="showRequestClosingModal = false" @finish-complete="estimateFinishComplete"/>
    </Teleport>
  </div>
  <div class="estimate-list-container">
    <div class="estimate-list-wrapper">
      <p class="tip-text"><b>TIP</b>. 상세한 답변으로 프로젝트 완성도를 높여보세요</p>
      <div class="estimate-list">
        <div class="estimate-item" v-for="item in users">
          <div class="profile-wrapper">
            <img :src="'http://localhost:8000/avatars/' + item.has_user.avatar" class="profile-img" />
            <p class="name">{{item.has_user.name}} 전문가</p>
            <star-rating :rating="3.8" :read-only="true" :increment="0.01" :show-rating="false" :star-size="15"></star-rating>
          </div>
          <div class="contents-wrapper">
            <span class="category">전문분야: {{item.has_user.has_profile_category[0].has_category.title}}</span>
            <span>경력: 3년</span>
            <span>질문개수: {{item.question_count}}개</span>
          </div>
          <div class="button-wrapper">
            <span class="badge wait" v-if="item.has_receive_estimate.has_status.title !== '답변완료'">{{item.has_receive_estimate.has_status.title}}</span>
            <span class="badge complete" v-else>{{item.has_receive_estimate.has_status.title}}</span>
            <button class="button natural small" v-if="item.has_receive_estimate.has_status.title === '견적발송'" @click="showEstimationBasis = true">견적보기</button>
            <button class="button natural small" v-else @click="$router.push('/request/answer?id=' + item.has_estimate.id + '&user_id=' + estimate.id)">질문보기</button>
            <!-- 견적 산출 근거 모달 -->
            <Teleport to="body">
              <estimation-basis :show="showEstimationBasis" @close="showEstimationBasis = false" :estimate-id="estimate.id" :user-id="item.has_user.id"/>
            </Teleport>
          </div>
        </div>

<!--        <div class="estimate-item">-->
<!--          <div class="profile-wrapper">-->
<!--            <img src="" class="profile-img" />-->
<!--            <p class="name">김진한 전문가</p>-->
<!--            <star-rating :rating="3.8" :read-only="true" :increment="0.01" :show-rating="false" :star-size="15"></star-rating>-->
<!--          </div>-->
<!--          <div class="contents-wrapper">-->
<!--            <span class="category">전문분야: 정부지원사업</span>-->
<!--            <span>경력: 3년</span>-->
<!--            <span>질문개수: 5개</span>-->
<!--          </div>-->
<!--          <div class="button-wrapper">-->
<!--            <span class="badge wait">답변 전</span>-->
<!--            <button class="button natural small">질문보기</button>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
  <div class="more-btn-wrapper">
    <button class="button natural mid" @click="getQuestionUserList(perPage + 3)" v-if="perPage <= total">더보기</button>
  </div>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
import MyRequestContents from "@/components/modal/MyRequestContents.vue";
import MyRequestClosing from "@/components/modal/MyRequestClosing.vue";
import EstimationBasis from "@/components/modal/EstimationBasis.vue";
export default {
  name: "MyRequestEstimate",
  components: {EstimationBasis, MyRequestClosing, MyRequestContents, StarRating},
  data() {
    return {
      showRequestModal: false,
      showRequestClosingModal: false,
      showEstimationBasis: false,
      pageCount: 1,
      perPage: 3,
      total: 0,
      users: [{
        "has_receive_estimate": {
          "has_status": {}
        },
        "has_user": {
          "id": "",
          "avatar": "",
          "get_profile": {},
          "has_careers": [],
          "has_certificate": {},
          "has_profile_category": [{
            "has_category": {"title": ''}
          }]
        }
      }],
      estimate: {
        "has_category": {}
      },
      finishTypes: {}
    }
  },
  methods: {
    getQuestionUserList(size) {
      if (!size) {
        size = 3
      }
      const id = this.$route.query.id
      this.axios.get('estimate/users/' + id + '?size=' + size, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.users = res.data.data.data
          this.estimate = res.data.estimate
          this.total = res.data.data.total
          this.perPage = res.data.data.per_page
        }
      }).catch(e => {

      })
    },
    getFinishTypes() {
      this.axios.get('/estimate_finish_type', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          console.log(res.data.data)
          this.finishTypes = res.data.data
        }
      }).catch(e => {

      })
    },
    estimateFinishComplete() {
      this.$router.push('/select/estimate?id=' + this.$route.query.id)
    }
  },
  mounted() {
    this.getFinishTypes()
    this.getQuestionUserList()
  }
}
</script>

<style lang="scss">
.my-request-estimate-container {
  margin-top: 40px;
  .title-wrapper {
    width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    h1 {
      margin: 0;
      font-size: 32px;
      font-weight: bold;
      line-height: normal;
      margin-right: 10px;
    }
    span {
      color: #585858;
      font-size: 16px;
      margin-left: 10px;
      font-weight: bold;
    }
  }
  .estimate-action-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px auto 0;
    width: 760px;
    .button {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
  .estimate-list-container {
    background: #F9F9F9;
    padding: 20px 0;
    box-sizing: border-box;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .estimate-list-wrapper {
      width: 760px;
      .tip-text {
        font-size: 14px;
        margin: 0;
        b {
          color: #FF0099;
        }
      }
      .estimate-list {
        .estimate-item {
          width: 760px;
          height: 170px;
          margin-top: 20px;
          background: #FFFFFF;
          box-shadow: 0px 12px 24px rgba(207, 215, 226, 0.54);
          border-radius: 20px;
          padding: 12px 22px 12px 40px;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
          .profile-wrapper {
            width: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #EEEEEE;;
            .profile-img {
              width: 65px;
              height: 65px;
              border-radius: 50%;
            }
            .name {
              color: #181818;
              font-size: 16px;
              margin: 0 0 12px 0;
              font-weight: bold;
            }
          }
          .contents-wrapper {
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            span {
              font-size: 14px;
              color: #424242;
              &:not(:last-child) {
                margin-bottom: 10px;
              }
              &.category {
                color: #181818;
                font-size: 16px;
                font-weight: bold;
              }
            }
          }
          .button-wrapper {
            margin-left: auto;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            .badge {
              padding: 2px 7px;
              box-sizing: border-box;
              border-radius: 5px;
              &.complete {
                background: #FF0099;
                color: white;
                font-weight: bold;
              }
              &.wait {
                color: #E253A9;
                background: #FFEBF7;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
  .more-btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .button {
      width: 160px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>