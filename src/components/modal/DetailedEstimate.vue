<template>
  <transition name="modal">
    <div class="detailed-estimate-modal-mask" v-if="show">
      <div class="detailed-estimate-modal-container">
        <div class="detailed-estimate-modal-content-wrapper">
          <div class="detailed-estimate-modal-header">
            <label>상세견적 보내기</label>
          </div>
          <div class="detailed-estimate-modal-body">
            <div class="detailed-estimate-modal-desc">
              <label>김다른 고객님과의 상담을 통해 최종 결정된<br>전문가님의 견적을 보내주세요.</label>
            </div>
            <div class="detailed-estimate-modal-tooltip">
              <span><span class="tip">Tip : </span>전문가님 00000</span>
              <span><span class="tip">상 : </span>전문가가 작업하기에 <b>까다로운</b> 프로젝트</span>
              <span><span class="tip">중 : </span>전문가가 작업하기에 <b>적당한</b> 수준의 프로젝트</span>
              <span><span class="tip">하 : </span>전문가가 짧은 기간에 수행할 수 있는 <b>쉬운</b> 수준의 프로젝트 추가 금액 관련 메시지</span>
            </div>
            <div class="detailed-estimate-item-wrapper">
              <div class="detailed-estimate-item-title">
                <label>난이도</label>
              </div>
              <div class="detailed-estimate-item-content">
                <button class="detailed-estimate-item-button" :class="{'active': selectCategory === '상'}" @click="selectCategory = '상'">상</button>
                <button class="detailed-estimate-item-button" :class="{'active': selectCategory === '중'}" @click="selectCategory = '중'">중</button>
                <button class="detailed-estimate-item-button" :class="{'active': selectCategory === '하'}" @click="selectCategory = '하'">하</button>
              </div>
            </div>
            <div class="detailed-estimate-item-wrapper">
              <div class="detailed-estimate-item-title">
                <label>견적금액</label>
              </div>
              <div class="detailed-estimate-item-content">
                <input/>
              </div>
            </div>
            <div class="detailed-estimate-item-wrapper">
              <div class="detailed-estimate-item-title">
                <label>예상되는 최대 추가 금액</label>
              </div>
              <div class="detailed-estimate-item-content">
                <input/>
              </div>
            </div>
            <div class="detailed-estimate-item-wrapper">
              <textarea-group label="견적 산출 근거" rows="7" placeholder="고객님의 의뢰 서비스는 ~~에 따라 ~~책정되었고 ~~ 추가에 따라 금액이 증가될 수 있습니다.." />
            </div>
          </div>
        </div>
        <div class="detailed-estimate-modal-footer">
          <div class="button-wrapper">
            <custom-button type="button" text="견적보내기" button-class="button primary mid" />
            <custom-button type="button" text="취소" button-class="button natural mid" @click="$emit('close')"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import TextareaGroup from "@/components/molecules/textareaGroup.vue";
import CategorySelectBtn from "@/components/atoms/CategorySelectBtn.vue";

export default {
  name: "DetailedEstimate",
  components: {CategorySelectBtn, TextareaGroup, CustomButton},
  props: {
    show: Boolean,

  },
  data() {
    return {
      selectCategory: '하',
      price: String
    }
  },
  watch: {
    price() {
      this.price = this.price.toLocaleString();
    }
  }
}
</script>

<style lang="scss">
.detailed-estimate-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .detailed-estimate-modal-container {
    width: 500px;
    height: 750px !important;
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

    .detailed-estimate-modal-content-wrapper {
      width: 100%;

      .detailed-estimate-modal-header {
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

      .detailed-estimate-modal-body {
        .detailed-estimate-modal-desc {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;

          label {
            text-align: center;
            font-size: 16px;
            color: #2C2C2C;
          }
        }
        .detailed-estimate-modal-tooltip {
          background: #FFEBF8;
          border-radius: 10px;
          padding: 10px 20px;
          display: flex;
          flex-direction: column;
          span {
            font-size: 12px;
            color: #424242;
            &.tip {
              font-weight: bold;
              color: #FF0099;
            }
          }
        }
        .detailed-estimate-item-wrapper {
          margin: 30px 0;
          display: flex;
          flex-direction: row;
          .detailed-estimate-item-title {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            label {
              margin: auto auto auto 0;
              font-weight: bold;
              font-size: 16px;
              color: #2C2C2C;
            }
          }
          .detailed-estimate-item-content {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .detailed-estimate-item-button {
              width: 47px;
              height: 32px;
              padding: 5px 12px;
              margin: 0 5px;
              box-sizing: border-box;
              border: 1px solid #6C6C6C;
              border-radius: 8px;
              background: white;
              color: #424242;
              cursor: pointer;
              &.active {
                border: 1px solid #FF0099;
                color: #FF0099;
              }
            }
            input {
              border: none;
              border-bottom: 1px solid #6C6C6C;
              text-align: right;
              font-weight: bold;
              font-size: 16px;
              color: #2C2C2C;
            }
          }
        }
      }
    }
    .detailed-estimate-modal-footer {
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
</style>