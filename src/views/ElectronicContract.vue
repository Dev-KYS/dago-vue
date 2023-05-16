<template>
  <div class="container">
    <div class="electronic-contract-wrapper">
      <div class="electronic-contract-content-wrapper">
        <div class="electronic-contract-title-wrapper">
          <label>전자계약서 작성</label>
          <ul>
            <li>김대표에서는 고객님의 금전과 지식재산권을 지켜드립니다.</li>
            <li>본 전자계약서는 고객님의 금전과 지식재산권 등을 보호하는데 법적 효력이 있음을 알려드립니다.</li>
          </ul>
        </div>
        <!-- Page Contents -->
        <div class="electronic-contract-content">
          <div class="electronic-contract-content-tip">
            <span><b>Tip.</b> 내용을 입력하시면 자동으로 전자계약서가 완성됩니다.</span>
          </div>
          <div class="electronic-contract-content-input-group">
            <label>계약명</label>
            <input placeholder="ex) 사업계획서 작성" v-model="name"/>
          </div>
          <div class="electronic-contract-content-input-group">
            <label>계약기간</label>
            <input class="electronic-contract-content-input-date" type="date" placeholder="ex) 사업계획서 작성" v-model="start_term"/>
            <span class="electronic-contract-content-input-division">~</span>
            <input class="electronic-contract-content-input-date" type="date" placeholder="ex) 사업계획서 작성" v-model="end_term"/>
          </div>
          <div class="electronic-contract-content-input-group">
            <label>과업범위</label>
            <input placeholder="ex) 사업계획서 작성" v-model="scope"/>
          </div>
          <hr>

          <div class="electronic-contract-content-input-group">
            <label>지급방법</label>
            <category-select-btn text="선금+잔금" :class="{'active': selectedPayment === true}" @click="changeMethod(true)"/>
            <category-select-btn text="잔금 (과업 종료 후 지급)" :class="{'active': selectedPayment === false}" @click="changeMethod(false)"/>
          </div>

          <div class="electronic-contract-content-input-group">
            <label>지급일</label>
            <div class="electronic-contract-payment-wrapper" v-if="selectedPayment === true">
              <div class="payment">
                <div class="inner">
                  <label>선금</label>
                </div>
              </div>
              <div class="payment-input">
                <input type="number" style="margin-bottom: 5px" v-model="down_payment">
                <input type="date" v-model="down_payment_date">
              </div>
            </div>
            <div class="electronic-contract-payment-wrapper">
              <div class="payment single" v-if="selectedPayment === false">
                <div class="inner">
                  <label>잔금</label>
                </div>
              </div>
              <div class="payment" v-if="selectedPayment === true">
                <div class="inner">
                  <label>잔금</label>
                </div>
              </div>
              <div class="payment-input">
                <input type="number" style="margin-bottom: 5px" v-model="balance">
                <input type="date" v-model="balance_date">
              </div>
            </div>
          </div>

          <div class="electronic-contract-content-input-group">
            <label>고객정보<br>(갑)</label>
            <div class="electronic-contract-payment-wrapper">
              <div class="customer-info">
                <div class="inner">
                  <label>이름</label>
                </div>
              </div>
              <div class="payment-input">
                <input readonly v-model="requests.has_user.name">
              </div>
            </div>
          </div>

          <div class="electronic-contract-content-input-group">
            <label></label>
            <div class="electronic-contract-payment-wrapper">
              <div class="customer-info">
                <div class="inner">
                  <label>주소</label>
                </div>
              </div>
              <div class="payment-input">
                <input readonly v-model="requests.has_user.email">
              </div>
            </div>
          </div>

            <div class="electronic-contract-content-input-group">
              <label></label>
              <div class="electronic-contract-payment-wrapper">
                <div class="customer-info">
                  <div class="inner">
                    <label>전화번호</label>
                  </div>
                </div>
                <div class="payment-phone-input">
                  <input readonly v-model="requests.has_user.phone">
<!--                  <input readonly v-model="phone1">-->
<!--                  <label class="electronic-contract-content-input-division">-</label>-->
<!--                  <input readonly v-model="phone2">-->
<!--                  <label class="electronic-contract-content-input-division">-</label>-->
<!--                  <input readonly v-model="phone3">-->
                </div>
              </div>
          </div>

        </div>
        <div class="electronic-contract-button">
          <custom-button type="button" text="저장하기" button-class="primary-natural mid" @click="saveContract"/>
          <custom-button type="button" text="계약서 전송하기" button-class="primary mid" @click="sendContract"/>
        </div>
        <Teleport to="body">
          <request-complete :show="showSaveCompleteModal" @close="showSaveCompleteModal = false" msg="전자계약서 저장 완료!"/>
        </Teleport>
      </div>
      <div class="electronic-contract-request-wrapper">
        <div class="electronic-contract-request-title">
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8105 16.401L14.7663 15.3568L16.5817 13.5068H12.0605V12.0068H16.5817L14.7663 10.1568L15.8105 9.11261L19.4547 12.7568L15.8105 16.401ZM1.86822 13.5068C1.37111 13.5068 0.945547 13.3298 0.591547 12.9758C0.237547 12.6218 0.0605469 12.1962 0.0605469 11.6991V1.81451C0.0605469 1.31739 0.237547 0.891836 0.591547 0.537836C0.945547 0.183836 1.37111 0.00683594 1.86822 0.00683594H14.7528C15.2499 0.00683594 15.6755 0.183836 16.0295 0.537836C16.3835 0.891836 16.5605 1.31739 16.5605 1.81451V7.06836C16.4355 7.04784 16.3105 7.03246 16.1855 7.02221C16.0605 7.01196 15.9355 7.00684 15.8105 7.00684C15.6855 7.00684 15.5605 7.00939 15.4355 7.01451C15.3105 7.01964 15.1855 7.03247 15.0605 7.05299V2.57984L8.21052 7.44909L1.5605 2.59524V11.6991C1.5605 11.7889 1.58935 11.8626 1.64705 11.9203C1.70475 11.978 1.77847 12.0068 1.86822 12.0068H10.1067C10.0862 12.1318 10.0734 12.2568 10.0682 12.3818C10.0631 12.5068 10.0605 12.6318 10.0605 12.7568C10.0605 12.8818 10.0657 13.0068 10.0759 13.1318C10.0862 13.2568 10.1016 13.3818 10.1221 13.5068H1.86822ZM2.60662 1.50679L8.21052 5.61454L13.9836 1.50679H2.60662Z" fill="#2C2C2C"/>
          </svg>
          <span>내가 보낸 의뢰내용</span>
        </div>
        <div class="electronic-contract-request-container">
          <ul>
            <ol type="1">
              <li>
                세부 카테고리
                <ul><li>{{requests.has_category.title}}</li></ul>
              </li>
              <li>
                프로젝트 희망 마감일정
                <ul><li>{{requests.end_date}}</li></ul>
              </li>
              <li>
                지역 및 진행방식
                <ul><li>{{requests.has_city.fullname}}</li></ul>
                <ul><li>{{requests.has_proceed.title}}</li></ul>
              </li>
              <li>
                의뢰내용
                <ul v-for="item in String(requests.contents).split('\r\n')"><li>{{item}}</li></ul>
              </li>
              <li>
                참고자료
                <ul v-for="item in requests.has_attach"><li>{{item.has_file.origin_name}}</li></ul>
              </li>
            </ol>
          </ul>
<!--          <ul>-->
<!--            <ol type="1">-->
<!--              <li v-for="request in requests">{{request.title}}-->
<!--                <ul>-->
<!--                  <li v-for="content in request.contents">{{content.content}}</li>-->
<!--                </ul>-->
<!--              </li>-->
<!--            </ol>-->
<!--          </ul>-->
        </div>

        <div class="electronic-contract-request-title">
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
        <div class="electronic-contract-question-container" v-for="(question, index) in questions">
          <div class="electronic-contract-question">
            <span style="margin-right: 20px">Q{{index + 1}}</span><span>{{question.question}}</span>
          </div>
          <div class="electronic-contract-answer">
            <span style="margin-right: 20px">A{{index + 1}}</span><span>{{question.answer}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import CustomInput from "@/components/atoms/CustomInput.vue";
import CategorySelectBtn from "@/components/atoms/CategorySelectBtn.vue";
import RequestComplete from "@/components/modal/RequestComplete.vue";

export default {
  name: "ElectronicContract",
  components: {RequestComplete, CategorySelectBtn, CustomInput, CustomButton},
  data() {
    return {
      requests: {
        has_category: {},
        has_attach: [{
          has_file: {}
        }],
        has_city: {},
        has_proceed: {},
        has_status: {},
        has_user: {}
      },
      questions: [
        {'id': 1, 'question': '몇 장 작성을 원하시나요?', 'answer': '3장 작성 원합니다'},
        {'id': 2, 'question': '아이템에 대해서 간단히 설명해주세요. ', 'answer': '재능 거래 플랫폼입니다'}
      ],
      selectedPayment: true,
      contractId: 0,
      name: '',
      start_term: {},
      end_term: {},
      scope: '',
      method: 'down',
      down_payment: '',
      down_payment_date: {},
      balance: '',
      balance_date: {},
      isNew: Boolean,
      showSaveCompleteModal: false,
      phone1: '',
      phone2: '',
      phone3: ''
    }
  },
  methods: {
    getContract() {
      const detailId = this.$route.params.id
      this.axios.get('/contract/detailId/' + detailId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          // res.data.data -> empty check
          // hasUser
          console.log(res.data.data);

          this.requests = res.data.data.has_estimate
          this.questions = res.data.data.has_questions

          // if (this.requests.has_user.phone.length === 11) {
          //   this.phone1 = this.requests.has_user.phone.substring(0, 3)
          //   this.phone2 = this.requests.has_user.phone.substring(3, 7)
          //   this.phone3 = this.requests.has_user.phone.substring(7, 11)
          // } else {
          //   this.phone1 = this.requests.has_user.phone.substring(0, 3)
          //   this.phone2 = this.requests.has_user.phone.substring(3, 6)
          //   this.phone3 = this.requests.has_user.phone.substring(6, 10)
          // }

          if (res.data.data.has_contracts.length > 0) {
            // 생성 필요
            this.isNew = false
            console.log(false)

            const contract = res.data.data.has_contracts[0]
            this.contractId = contract.id
            this.name = contract.name
            this.start_term = contract.start_term
            this.end_term = contract.end_term
            this.scope = contract.scope
            this.method = contract.method
            this.down_payment = contract.down_payment
            this.down_payment_date = contract.down_payment_date
            this.balance = contract.balance
            this.balance_date = contract.balance_date

            this.selectedPayment = this.method === 'down'
          } else {
            // 기존 계약서 있음
            this.isNew = true
            console.log(true)
          }
        }
      }).catch(e => {

      })
    },
    changeMethod(type) {
      if (type) {
        this.method = "down"
      } else {
        this.method = "balance"
      }
      this.selectedPayment = type
    },
    saveContract() {
      const formData = new FormData()
      formData.append('estimate_detail_id', this.$route.params.id)
      // formData.append('contract_id', this.contractId)
      formData.append('name', this.name)
      formData.append('start_term', this.start_term)
      formData.append('end_term', this.end_term)
      formData.append('scope', this.scope)
      formData.append('method', this.method)
      formData.append('down_payment', this.down_payment)
      formData.append('down_payment_date', this.down_payment_date)
      formData.append('balance', this.balance)
      formData.append('balance_date', this.balance_date)

      if (this.isNew) {
        this.axios.post('/contract', formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }).then(res => {
          console.log(res.data)
          if (res.data.status === 'success') {
            // 저장완료
            this.showSaveCompleteModal = true
          }
        }).catch(e => {
          console.log(e)
        })
      } else {
        this.axios.post('/contract/update/' + this.contractId, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }).then(res => {
          console.log(res.data)
          if (res.data.status === 'success') {
            // 저장완료
            this.showSaveCompleteModal = true
          }
        }).catch(e => {
          console.log(e)
        })
      }
    },
    sendContract() {
      if (this.contractId) {
        this.$router.push('/contract/sign/' + this.contractId)
      }
    }
  },
  mounted() {
    this.getContract()
  }
}
</script>

<style lang="scss">
.electronic-contract-wrapper {
  display: flex;
  .electronic-contract-content-wrapper {
    margin-top: 40px;
    flex: 6;
    .electronic-contract-title-wrapper {
      label {
        font-weight: bold;
        font-size: 32px;
        color: #1B1B1B;
      }
    }
    .electronic-contract-content {
      margin-top: 50px;
      .electronic-contract-content-tip {
        span {
          color: #585858;
          b {
            color: #FF0099;
          }
        }
      }
      hr {
        background: #F9F9F9;
        border: transparent;
        height: 10px;
        margin: 40px 10px;
      }
      .electronic-contract-content-input-group {
        display: flex;
        margin: 10px;
        label {
          width: 10%;
          font-weight: bold;
          font-size: 16px;
          color: #181818;
          margin: auto 0;
        }
        input {
          //width: 90%;
          flex: 1;
          height: 50px;
          border: 1px solid #EEEEEE;
          padding: 10px;
        }
        button {
          flex: 1;
          height: 50px;
          margin: 0 10px 0 0;
        }
        .electronic-contract-content-input-date {
          flex: 1;
        }
        .electronic-contract-content-input-division {
          margin: auto 5px;
          text-align: center;
        }
        .electronic-contract-payment-wrapper {
          flex: 1;
          margin: 0 10px 0 0;
          display: flex;
          flex-direction: row;
          .payment {
            width: 50%;
            position: relative;
            margin-right: 5px;
            &.single {
              width: 19%;
            }
            &:after {
              content: "";
              display: block;
              padding-bottom: 100%;
            }
            .inner {
              position: absolute;
              width: 100%;
              height: 100%;
              display: flex;
              background: #EEEEEE;
              label {
                width: 100%;
                margin: auto;
                text-align: center;
              }
            }
          }
          .customer-info {
            margin-right: 5px;
            .inner {
              display: flex;
              width: 119px;
              height: 50px;
              background: #EEEEEE;
              label {
                width: 100%;
                margin: auto;
                text-align: center;
              }
            }
          }
          .payment-input {
            width: 100%;
            display: flex;
            flex-direction: column;
            input {
              width: 100%;
            }
          }
          .payment-phone-input {
            width: 100%;
            display: flex;
            flex-direction: row;
          }
        }
      }
    }
    .electronic-contract-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      .button {
        width: 160px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 16px;

        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
  .electronic-contract-request-wrapper {
    flex: 2;
    background: #F9F9F9;
    padding: 15px;
    .electronic-contract-request-title {
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
    .electronic-contract-request-container {
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
    .electronic-contract-question-container {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      .electronic-contract-question {
        font-size: 12px;
        color: #585858;
      }
      .electronic-contract-answer {
        font-size: 12px;
        color: #181818;
      }
    }
  }
}
</style>