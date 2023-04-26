<template>
  <Transition name="modal">
    <div class="estimation-basis-modal-mask" v-if="show">
      <div class="estimation-basis-modal-container">
        <div class="estimation-basis-modal-content-wrapper">
          <div class="estimation-basis-modal-header">
            <label>견적 산출 근거</label>
          </div>
          <div class="estimation-basis-modal-body">
            <div class="estimation-basis-body-desc">
              <p>*전문가가 고객님과의 상담을 통해 결정된 최종 견적금액 입니다.</p>
            </div>
            <div class="estimation-basis-body-detail-wrapper">
              <p class="estimation-basis-body-detail-header">전문가의 견적 설명</p>
              <div class="estimation-basis-body-detail">
                <p class="estimation-basis-body-detail-price">견적금액 : {{String(detail.amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}원</p>
                <span>난이도 : {{detail.difficulty}}</span><br>
                <span>난이도 근거 : {{detail.difficulty_reason}}</span><br>
                <span>견적 근거 : {{detail.amount_reason}}</span>
                <ul>
                  <li>최종견적 금액에서 예상되는 최고 추가금액 : <b>{{String(detail.add_amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</b>원</li>
                  <li>추가금액은 발생하지 않을 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="estimation-basis-modal-footer">
          <div class="button-wrapper">
            <custom-button type="button" text="닫기" button-class="natural mid" @click="$emit('close')"/>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "EstimationBasis",
  components: {CustomButton},
  props: {
    show: Boolean,
    estimateId: Number,
    userId: Number
  },
  data() {
    return {
      detail: {}
    }
  },
  methods: {
    getEstimateDetail() {
      this.axios.get('/estimate_detail/detail?estimate_id=' + this.estimateId + '&user_id=' + this.userId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          console.log(res.data.data)
          this.detail = res.data.data
        }
      }).catch(e => {

      })
    }
  },
  mounted() {

  },
  updated() {
    this.getEstimateDetail()
  }
}
</script>

<style lang="scss">
.estimation-basis-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .estimation-basis-modal-container {
    width: 500px;
    height: 550px !important;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .estimation-basis-modal-content-wrapper {
      width: 100%;
      .estimation-basis-modal-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        label {
          font-size: 26px;
          font-weight: bold;
          color: #1B1B1B;
        }
      }
      .estimation-basis-modal-body {
        .estimation-basis-body-desc {
          display: flex;
          p {
            width: 55%;
            margin: auto;
            text-align: center;
          }
        }
        .estimation-basis-body-detail-wrapper {
          margin-top: 50px;
          .estimation-basis-body-detail-header {
            font-weight: bold;
            color: #2C2C2C;
          }
          .estimation-basis-body-detail {
            padding: 20px;
            border-radius: 20px;
            border: 1px solid #6C6C6C;
            .estimation-basis-body-detail-price {
              font-weight: bold;
              font-size: 24px;
              color: #FF0000;
              text-align: center;
            }
          }
        }
      }
    }

    .estimation-basis-modal-footer {
      .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .button {
          width: 160px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>