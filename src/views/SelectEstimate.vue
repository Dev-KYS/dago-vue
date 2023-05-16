<template>
  <div class="my-request-container">
    <div class="title-wrapper">
      <h1>사업계획서 작성</h1>
      <span>의뢰 마감 된 프로젝트</span>
    </div>
    <div class="estimate-list-container">
      <div class="estimate-list-wrapper">
        <p class="tip-text"><b>TIP</b>. 상세한 답변으로 프로젝트 완성도를 높여보세요</p>
        <div class="estimate-list">
          <div class="estimate-item" v-for="item in users">
            <div class="profile-wrapper">
              <img :src="'http://localhost:8000/avatars/' + item.has_user.avatar" class="profile-img" />
              <p class="name">{{item.has_user.name}} 전문가</p>
              <div>
<!--                <star-rating :rating="3.8" :read-only="true" :increment="0.01" :show-rating="false" :star-size="15"></star-rating>-->
                <q-rating
                    v-model="ratingModel"
                    size="1em"
                    color="#FEC600"
                    readonly />
                <span>(8)</span>
              </div>
            </div>
            <div class="contents-wrapper">
              <span class="category">최종견적 금액 : {{String(item.amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}원</span>
            </div>
            <div class="difficulty-wrapper">
              <div class="difficulty-item">
                <span>{{item.difficulty}}</span>
                <div class="difficulty-item-tooltip">
                  <svg id="difficulty-item-tooltip-clip" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1299 10.8457C20.1299 16.3686 15.6527 20.8457 10.1299 20.8457C4.60704 20.8457 0.129883 16.3686 0.129883 10.8457C0.129883 5.32286 4.60704 0.845703 10.1299 0.845703C15.6527 0.845703 20.1299 5.32286 20.1299 10.8457Z" fill="#D9D9D9"/>
                    <path d="M9.25484 13.1029V13.0432C9.26147 12.4102 9.32775 11.9064 9.4537 11.5319C9.57965 11.1573 9.75863 10.8541 9.99063 10.6221C10.2226 10.3901 10.5011 10.1763 10.8259 9.98073C11.0214 9.86142 11.1971 9.72056 11.3528 9.55815C11.5086 9.39243 11.6313 9.20185 11.7207 8.98642C11.8136 8.77098 11.86 8.53235 11.86 8.27051C11.86 7.9457 11.7837 7.66397 11.6313 7.42534C11.4788 7.1867 11.275 7.00275 11.0198 6.87349C10.7645 6.74423 10.4812 6.6796 10.1696 6.6796C9.89783 6.6796 9.63599 6.73594 9.3841 6.84863C9.13221 6.96132 8.92174 7.13864 8.75271 7.38059C8.58367 7.62254 8.4859 7.93907 8.45938 8.33017H7.20654C7.23306 7.76672 7.37889 7.28448 7.64404 6.88343C7.91251 6.48239 8.26549 6.17581 8.70299 5.96369C9.14381 5.75157 9.63268 5.64551 10.1696 5.64551C10.7529 5.64551 11.26 5.76151 11.6909 5.99352C12.1251 6.22553 12.4599 6.54371 12.6952 6.94806C12.9338 7.35242 13.0531 7.81312 13.0531 8.33017C13.0531 8.69475 12.9968 9.02453 12.8841 9.31951C12.7747 9.61449 12.6156 9.87799 12.4068 10.11C12.2013 10.342 11.9528 10.5475 11.6611 10.7265C11.3694 10.9088 11.1358 11.101 10.9601 11.3032C10.7844 11.502 10.6568 11.739 10.5773 12.0141C10.4977 12.2892 10.4546 12.6323 10.448 13.0432V13.1029H9.25484ZM9.8912 16.0461C9.64594 16.0461 9.43547 15.9582 9.25981 15.7826C9.08415 15.6069 8.99632 15.3965 8.99632 15.1512C8.99632 14.9059 9.08415 14.6955 9.25981 14.5198C9.43547 14.3441 9.64594 14.2563 9.8912 14.2563C10.1365 14.2563 10.3469 14.3441 10.5226 14.5198C10.6983 14.6955 10.7861 14.9059 10.7861 15.1512C10.7861 15.3136 10.7447 15.4627 10.6618 15.5986C10.5823 15.7345 10.4745 15.8439 10.3386 15.9268C10.2061 16.0063 10.0569 16.0461 9.8912 16.0461Z" fill="#2C2C2C"/>
                  </svg>
                  <div class="difficulty-item-tooltip-content">
                    <p>상담을 통해 전문가가 직접 프로젝트 진행에 대한 난이도를 제시한 기준입니다. 위 난이도를 통해 전문가의 실력을 간접적으로 판단할 수 있습니다.</p>
                    <div class="difficulty-item-tooltip-dif">
                      <p><b>상</b> : 전문가가 작업하기에 까다로운 프로젝트</p>
                      <p><b>중</b> : 전문가가 작업하기에 적당한 수준의 프로젝트</p>
                      <p><b>하</b> : 전문가가 짧은 기간에 수행할 수 있는 쉬운 수준의 프로젝트</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="button-wrapper">
              <button class="button natural small" @click="showEstimationBasis = true">견적 산출 근거</button>
              <Teleport to="body">
                <estimation-basis :show="showEstimationBasis" @close="showEstimationBasis = false" :estimate-id="item.estimate_id" :user-id="item.has_user.id"/>
              </Teleport>
              <button class="button primary small" @click="showConfirmedRequest = true">의뢰하기</button>
              <Teleport to="body">
                <confirmed-request
                    :show="showConfirmedRequest"
                    :name="item.has_user.name"
                    :detail-id="item.id"
                    :pro-id="item.has_user.id"
                    :customer-id="item.has_estimate.user_id"
                    @close="showConfirmedRequest = false" />
              </Teleport>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="more-btn-wrapper">
      <button class="button natural mid" @click="getQuestionUserList(perPage + 3)" v-if="perPage <= total">더보기</button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import EstimationBasis from "@/components/modal/EstimationBasis.vue";
import ConfirmedRequest from "@/components/modal/ConfirmedRequest.vue";

export default {
  name: "SelectEstimate",
  components: {ConfirmedRequest, EstimationBasis},
  data() {
    return {
      ratingModel: 4,
      showEstimationBasis: false,
      showConfirmedRequest: false,
      pageCount: 1,
      perPage: 3,
      total: 0,
      users: [{
        "has_user": {},
        'has_estimate': {
          'has_user': {}
        }
      }],
    }
  },
  methods: {
    getQuestionUserList(size) {
      if (!size) {
        size = 3
      }
      const id = this.$route.query.id
      this.axios.get('/estimate_detail/estimate?estimate_id=' + id + '&size=' + size, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        console.log(res.data.data)
        this.users = res.data.data.data
        // this.estimate = res.data.data.data.has_estimate
        this.total = res.data.data.total
        this.perPage = res.data.data.per_page
      }).catch(e => {

      })
      // this.axios.get('estimate/users/' + id + '?size=' + size, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('access_token')}`
      //   }
      // }).then(res => {
      //   if (res.data.status === 'success') {
      //     console.log(res.data.data)
      //     this.users = res.data.data.data
      //     // this.estimate = res.data.estimate
      //     this.total = res.data.data.total
      //     this.perPage = res.data.data.per_page
      //   }
      // }).catch(e => {
      //
      // })
    }
  },
  mounted() {
    this.getQuestionUserList()
  }
}
</script>

<style lang="scss">
.my-request-container {
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
    }
    .request-tab {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      margin: 0;
      li {
        color: #585858;
        font-weight: bold;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 10px;
        }
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
                font-size: 20px;
                font-weight: bold;
              }
            }
          }
          .difficulty-wrapper {
            margin-left: 40px;
            width: 10%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            border-left: 1px solid #EEE;
            border-right: 1px solid #EEE;
            .difficulty-item {
              position: relative;
              display: flex;
              margin: auto;
              width: 100%;
              height: 100%;
              span {
                margin: auto;
                font-size: 24px;
                color: #424242;
                font-weight: bold;
              }
              .difficulty-item-tooltip {
                position: absolute;
                top: 5px;
                right: 5px;
                &:hover {
                  .difficulty-item-tooltip-content {
                    visibility: visible;
                  }
                }
                .difficulty-item-tooltip-content {
                  visibility: hidden;
                  width: 460px;
                  background-color: #EEEEEE;
                  color: #424242;
                  //text-align: center;
                  position: absolute;
                  z-index: 1;
                  bottom: 180%;
                  //left: 50%;
                  margin-left: -208px;
                  padding: 25px;
                  border-radius: 20px;
                  .difficulty-item-tooltip-dif {
                    p {
                      line-height: 5px;
                      b {
                        color: #FF0099;
                      }
                    }
                  }
                  &:after {
                    content: " ";
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: -10px;
                    border-width: 10px;
                    border-style: solid;
                    border-color: #EEEEEE transparent transparent transparent;
                  }
                }
              }
            }
          }
          .button-wrapper {
            margin-left: auto;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            button {
              margin: 5px;
              width: 100%;
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