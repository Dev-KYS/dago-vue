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
          <div class="estimate-item">
            <div class="profile-wrapper">
              <img src="" class="profile-img" />
              <p class="name">김진한 전문가</p>
              <q-rating
                  v-model="ratingModel"
                  size="1em"
                  color="#FEC600"
                  readonly />
<!--              <star-rating :rating="3.8" :read-only="true" :increment="0.01" :show-rating="false" :star-size="15"></star-rating>-->
            </div>
            <div class="contents-wrapper">
              <span class="category">최종견적 금액 : 50,000원</span>
            </div>
            <div class="difficulty-wrapper">
              <span>상</span>
            </div>
            <div class="button-wrapper">
              <button class="button natural small">견적 산출 근거</button>
              <button class="button primary small">의뢰하기</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="more-btn-wrapper">
      <button class="button natural mid">더보기</button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "SelectEstimate",
  data() {
    return {
      ratingModel: 4
    }
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
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            border-left: 1px solid #EEE;
            border-right: 1px solid #EEE;
            span {
              font-size: 14px;
              color: #424242;
              font-weight: bold;
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