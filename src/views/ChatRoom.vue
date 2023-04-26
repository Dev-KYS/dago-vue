<template>
  <div class="container">
    <div class="chat-container">
      <div class="chat-wrapper">
        <div class="chat-user-wrapper">
          <div class="chat-user">
            <img src="/public/assets/icons/default_avatar.png"/>
            <span>김진한 전문가</span>
          </div>
          <div>
            <custom-button type="button" class="button primary mid" text="의뢰 확정하기" @click="chatConfirmationShow = true"/>
          </div>
        </div>
      </div>
<!--      <div class="chat-user-black"></div>-->
    </div>

    <div class="chat-container">
      <div class="chat-content-wrapper">
        <div class="chat-content">
          <!-- 채팅 창 -->
          <div class="chat">
            <div class="q-pa-md row justify-center">
              <q-scroll-area ref="scrollAreaRef" style="width: 100%; margin: 10px; height: 640px;">
                <q-chat-message :text="['견적서']" bg-color="white">
                  <div class="chat-estimate-detail-wrapper">
                    <div class="chat-estimate-detail-title">
                      <label>견적서</label>
                    </div>

                    <div class="chat-estimate-detail-desc">
                      <span>김다른 고객님 안녕하세요. 사업계획서 작성 전문가 김진한 입니다. 상담 후 상세견적금액과 최대 예상견적 금액입니다.</span>
                    </div>

                    <div class="division"></div>

                    <div class="chat-estimate-detail-price">
                      <div class="chat-estimate-detail-price-title">서비스</div>
                      <div class="chat-estimate-detail-price-item">사업계획서 작성</div>
                    </div>
                    <div class="chat-estimate-detail-price">
                      <div class="chat-estimate-detail-price-title">견적금액</div>
                      <div class="chat-estimate-detail-price-item">50,000원</div>
                    </div>
                    <div class="chat-estimate-detail-price">
                      <div class="chat-estimate-detail-price-title">최대 예상금액</div>
                      <div class="chat-estimate-detail-price-item">100,000원</div>
                    </div>

                    <div class="division"></div>

                    <div class="chat-estimate-sys-msg">
                      <span>*계약 전 궁금한 점을 물어보세요</span>
                    </div>

                    <div class="chat-estimate-profile-button">
                      <custom-button type="button" class="button primary mid" text="고수 프로필 보기"/>
                    </div>
                  </div>
                </q-chat-message>

                <div v-for="item in chats">
                  <q-chat-message bg-color="white" :text="[item.msg]" :sent="item.type === 'send'"/>
                </div>
              </q-scroll-area>
            </div>
          </div>

          <div class="chat-button-wrapper">
            <button class="chat-button" @click="chatFinishShow = true">상담 종료</button>
            <img src="/assets/icons/report.png" @click="chatReportShow = true"/>
          </div>
        </div>

        <div class="chat-send">
          <div class="chat-input-wrapper">
            <input placeholder="메세지를 입력하세요"/>
            <button>전송</button>
          </div>
          <div class="chat-attach-wrapper">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5024 23.9614C3.97485 23.0795 2.98488 21.7944 2.53249 20.106C2.0801 18.4177 2.29486 16.8098 3.1768 15.2822L9.69276 3.99625C10.3273 2.89728 11.2617 2.18241 12.4962 1.85166C13.7306 1.5209 14.8973 1.67276 15.9963 2.30725C17.0952 2.94174 17.8101 3.8762 18.1409 5.11063C18.4716 6.34506 18.3198 7.51176 17.6853 8.61073L11.807 18.7922C11.4045 19.4894 10.8235 19.9398 10.064 20.1432C9.30461 20.3467 8.57624 20.2471 7.87892 19.8445C7.1816 19.4419 6.73127 18.861 6.52792 18.1017C6.3246 17.3424 6.42421 16.6141 6.82676 15.9169L12.705 5.73539L13.9501 6.45421L8.07179 16.6357C7.86812 16.9885 7.81672 17.3531 7.91759 17.7295C8.01845 18.1059 8.24526 18.396 8.59803 18.5996C8.9508 18.8033 9.31539 18.8547 9.69182 18.7538C10.0683 18.653 10.3583 18.4262 10.562 18.0734L16.4403 7.89191C16.885 7.12157 16.9949 6.31686 16.7699 5.47778C16.545 4.63868 16.0472 3.99669 15.2766 3.55179C14.506 3.1069 13.7014 2.99697 12.8628 3.22202C12.0243 3.44705 11.3826 3.94474 10.9378 4.71509L4.42186 16.0011C3.74321 17.1765 3.57958 18.4199 3.93095 19.7313C4.28234 21.0427 5.04576 22.0377 6.22122 22.7164C7.39668 23.395 8.6401 23.5587 9.95148 23.2073C11.2629 22.8559 12.2579 22.0925 12.9365 20.917L19.4525 9.63104L20.6976 10.3499L14.1816 21.6359C13.2997 23.1634 12.0145 24.1534 10.3262 24.6057C8.63789 25.0581 7.02995 24.8434 5.5024 23.9614Z" fill="#6C6C6C"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="chat-estimate-info-wrapper">
        <div class="chat-estimate-info-title">
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8105 16.401L14.7663 15.3568L16.5817 13.5068H12.0605V12.0068H16.5817L14.7663 10.1568L15.8105 9.11261L19.4547 12.7568L15.8105 16.401ZM1.86822 13.5068C1.37111 13.5068 0.945547 13.3298 0.591547 12.9758C0.237547 12.6218 0.0605469 12.1962 0.0605469 11.6991V1.81451C0.0605469 1.31739 0.237547 0.891836 0.591547 0.537836C0.945547 0.183836 1.37111 0.00683594 1.86822 0.00683594H14.7528C15.2499 0.00683594 15.6755 0.183836 16.0295 0.537836C16.3835 0.891836 16.5605 1.31739 16.5605 1.81451V7.06836C16.4355 7.04784 16.3105 7.03246 16.1855 7.02221C16.0605 7.01196 15.9355 7.00684 15.8105 7.00684C15.6855 7.00684 15.5605 7.00939 15.4355 7.01451C15.3105 7.01964 15.1855 7.03247 15.0605 7.05299V2.57984L8.21052 7.44909L1.5605 2.59524V11.6991C1.5605 11.7889 1.58935 11.8626 1.64705 11.9203C1.70475 11.978 1.77847 12.0068 1.86822 12.0068H10.1067C10.0862 12.1318 10.0734 12.2568 10.0682 12.3818C10.0631 12.5068 10.0605 12.6318 10.0605 12.7568C10.0605 12.8818 10.0657 13.0068 10.0759 13.1318C10.0862 13.2568 10.1016 13.3818 10.1221 13.5068H1.86822ZM2.60662 1.50679L8.21052 5.61454L13.9836 1.50679H2.60662Z" fill="#2C2C2C"/>
          </svg>
          <span>내가 보낸 의뢰내용</span>
        </div>
        <div class="chat-estimate-info-container">
          <ul>
            <ol type="1">
              <li>세부 카테고리
                <ul>
                  <li>사업계획서 작성</li>
                </ul>
              </li>
            </ol>
          </ul>
        </div>

        <div class="division"></div>

        <div class="chat-estimate-info-title">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_379_6602" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
              <rect x="0.6875" y="0.134766" width="22" height="22" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_379_6602)">
              <path d="M15.0971 19.9665L11.5186 16.388L12.4846 15.4219L15.0971 18.0344L20.2939 12.8377L21.2599 13.8036L15.0971 19.9665ZM11.6878 10.2181L18.8801 5.63474H4.4955L11.6878 10.2181ZM11.6878 11.6459L4.35447 6.95683V16.3527C4.35447 16.4349 4.38092 16.5025 4.43381 16.5554C4.4867 16.6083 4.55428 16.6347 4.63655 16.6347H9.18989L10.5649 18.0097H4.63655C4.17351 18.0097 3.78158 17.8493 3.46074 17.5285C3.13991 17.2076 2.97949 16.8157 2.97949 16.3527V5.91682C2.97949 5.45378 3.13991 5.06185 3.46074 4.74102C3.78158 4.42018 4.17351 4.25977 4.63655 4.25977H18.7391C19.2021 4.25977 19.594 4.42018 19.9149 4.74102C20.2357 5.06185 20.3961 5.45378 20.3961 5.91682V10.1688L19.0211 11.5437V6.95683L11.6878 11.6459Z" fill="#2C2C2C"/>
            </g>
          </svg>
          <span>완료된 상담내용</span>
        </div>
        <div class="chat-estimate-info-question-container">
          <div class="chat-estimate-info-question">
            <span style="margin-right: 20px">Q1</span><span>몇 장 작성을 원하시나요?</span>
          </div>
          <div class="chat-estimate-info-answer">
            <span style="margin-right: 20px">A1</span><span>3장 작성 원합니다.</span>
          </div>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <chat-report :show="chatReportShow" @close="chatReportShow = false"/>
    </Teleport>
    <Teleport to="body">
      <chat-finish :show="chatFinishShow" @close="chatFinishShow = false"/>
    </Teleport>
    <Teleport to="body">
      <chat-confirmation :show="chatConfirmationShow" @close="chatConfirmationShow = false" @confirm="confirmationOfRequest"/>
    </Teleport>
    <Teleport to="body">
      <confirmation-of-request :show="chatConfirmationShow" @close="chatConfirmationShow = false" msg="sdf"/>
    </Teleport>
  </div>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import ChatReport from "@/components/modal/ChatReport.vue";
import ChatFinish from "@/components/modal/ChatFinish.vue";
import ChatConfirmation from "@/components/modal/ChatConfirmation.vue";
import ConfirmationOfRequest from "@/components/modal/ConfirmationOfRequest.vue";

export default {
  name: "ChatRoom",
  components: {
    ConfirmationOfRequest,
    ChatConfirmation,
    ChatFinish,
    ChatReport,
    CustomButton
  },
  props: {
    chatReportShow: false,
    chatFinishShow: false,
    chatConfirmationShow: false,
    confirmationOfRequestShow: false
  },
  data() {
    return {
      chats: [
        {'id': 1, 'sender_id': 1, 'receiver_id': 1, 'msg': '안녕하세요! 전문가님과 계약하고 싶어서 연락드립니다 :)', 'type': 'send'},
        {'id': 2, 'sender_id': 1, 'receiver_id': 1, 'msg': '안녕하세요! 고객님님과 계약하고 싶어서 답장드립니다 :)', 'type': 'receive'},
        {'id': 3, 'sender_id': 1, 'receiver_id': 1, 'msg': '계약 진행은 어떻게 하면 될까요?', 'type': 'send'},
        {'id': 4, 'sender_id': 1, 'receiver_id': 1, 'msg': '다고 의뢰 확정후 다고 전자 서명을 이용해 계약을 진행하면 됩니다 :)', 'type': 'receive'},
        {'id': 5, 'sender_id': 1, 'receiver_id': 1, 'msg': '개인 연락처를 알 수 있을까요?', 'type': 'send'},
        {'id': 6, 'sender_id': 1, 'receiver_id': 1, 'msg': '전자서명 이후 전달드리겠습니다!', 'type': 'receive'},
      ]
    }
  },
  methods: {
    confirmationOfRequest() {
      this.confirmationOfRequestShow = true
    }
  }
}
</script>

<style lang="scss">
.chat-container {
  display: flex;
  flex-direction: row;
  .chat-wrapper {
    width: 860px;
    .chat-user-wrapper {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .chat-user {
        display: flex;
        img {
          width: 65px;
          height: 65px;
        }
        span {
          font-size: 24px;
          font-weight: bold;
          margin: auto 0 auto 10px;
        }
      }
    }
  }
  .chat-content-wrapper {
    margin-top: 40px;
    .chat-content {
      background: #EEEEEE;
      width: 860px;
      height: 693.7px;
      position: relative;
      .chat-button-wrapper {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: end;
        margin: 10px 0;
        .chat-button {
          border: 1px solid #6C6C6C;
          border-radius: 5px;
          width: 102px;
          height: 32px;
          background: #FFF;
          margin: auto 10px;
          color: #6C6C6C;
        }
        img {
          width: 20px;
          height: 21px;
          background: transparent;
          margin: auto 10px;
        }
      }
      .chat {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .chat-estimate-detail-wrapper {
          max-width: 382px;
          padding: 20px;
          .division {
            width: 100%;
            height: 1px !important;
            background: #EEEEEE;
          }
          .chat-estimate-detail-title {
            display: flex;
            label {
              font-size: 20px;
              margin: auto;
            }
          }
          .chat-estimate-detail-price {
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            .chat-estimate-detail-price-title {
              flex: 1;
              display: flex;
              justify-content: start;
            }
            .chat-estimate-detail-price-item {
              flex: 1;
              display: flex;
              justify-content: end;
            }
          }
          .chat-estimate-detail-desc {
            margin-top: 10px;
            font-size: 16px;
          }
          .chat-estimate-sys-msg {
            margin-top: 10px;
          }
          .chat-estimate-profile-button {
            margin-top: 10px;
          }
        }
      }
    }
    .chat-send {
      background: #FFF;
      width: 860px;
      height: 120px;
      border: 1px solid #D9D9D9;
      display: flex;
      flex-direction: column;
      .chat-input-wrapper {
        display: flex;
        flex-direction: row;
        padding: 10px;
        input {
          width: 90%;
          border-radius: 10px;
          border: 1px solid #EEEEEE;
          padding: 10px;
          margin: auto 10px;
        }
        button {
          width: 10%;
          height: 32px;
          border-radius: 10px;
          border: 1px solid #181818;
          background: transparent;
          margin: auto 10px;
        }
      }
      .chat-attach-wrapper {
        padding: 10px;
        display: flex;
        flex-direction: row;
        svg {
          margin: auto 10px;
        }
      }
    }
  }
  .chat-estimate-info-wrapper {
    margin-top: 40px;
    padding: 0 15px;
    width: 100%;
    .chat-estimate-info-title {
      display: flex;
      svg {
        margin: auto 0;
      }
      span {
        margin: auto 0;
        font-weight: bold;
        font-size: 16px;
        color: #2C2C2C;
      }
    }
    .chat-estimate-info-container {
      ul {
        padding-left: 0;
        ol {
          padding-left: 15px;
          li {
            color: #585858;
            margin: 15px 0;
            ul {
              padding-left: 15px;
              list-style-type: '- ';
              li {
                margin: 0;
                color: #181818;
              }
            }
          }
        }
      }
    }
    .chat-estimate-info-question-container {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      .chat-estimate-info-question {
        font-size: 12px;
        color: #585858;
      }
      .chat-estimate-info-answer {
        font-size: 12px;
        color: #181818;
      }
    }
  }
}
.division {
  width: 100%;
  height: 2px;
  border: 2px solid #EEEEEE;
  margin: 20px 0;
}
</style>