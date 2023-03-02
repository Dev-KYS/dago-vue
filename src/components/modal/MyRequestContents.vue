<template>
  <transition name="modal">
    <div class="request-modal-mask" v-if="show">
      <div class="request-modal-container">
        <div class="request-modal-content-wrapper">
          <div class="request-modal-header">
            <label>내 요청서 보기</label>
            <span>사업계획서 작성에 대한 내 의뢰내용</span>
          </div>
          <div class="request-modal-body">
            <div class="request-contents-item-wrapper">
              <ol type="1">
                <li v-for="item in items">{{item.title}}
                  <ul>
                    <li v-for="content in item.contents">
                      <span v-show="item.id !== 5">{{content}}</span>
                      <router-link to="" v-show="item.id === 5">{{content}}</router-link>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="request-modal-footer">
          <div class="button-wrapper">
<!--            <custom-button type="button" text="저장하기" button-class="primary mid" />-->
            <custom-button type="button" text="닫기" button-class="natural mid" @click="$emit('close')"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "MyRequestContents",
  components: {CustomButton},
  props: {
    show: Boolean
  },
  data() {
    return {
      items: [
        {id: 1, title: '세부 카테고리', type:"text", contents: ["사업계획서 작성"]},
        {id: 2, title: '프로젝트 희망 마감일정', type:"text", contents: ["2023년 2월 3일"]},
        {id: 3, title: '지역 및 진행방식', type:"text", contents: ["대전광역시 유성구", "제가 있는 곳으로 와주세요"]},
        {id: 4, title: '의뢰내용', type:"text", contents: ["예비창업패키지 지원 희망합니다"]},
        {id: 5, title: '참고자료', type: "file", contents: ["사업계획서 초안.hwp"]}
      ]
    }
  }
}
</script>

<style lang="scss">
.request-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .request-modal-container {
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
    .request-modal-content-wrapper {
      width: 100%;
      .request-modal-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        label {
          font-size: 26px;
          font-weight: bold;
          color: #1B1B1B;
        }
        span {
          color: #2C2C2C;
          font-size: 16px;
        }
      }
      .request-modal-body {
        margin-top: 50px;
        .request-contents-item-wrapper {
          ol {
            li {
              font-size: 14px;
              color: #585858;
              margin-bottom: 20px;
              ul {
                list-style-type: '- ';
                padding-left: 12px;
                li {
                  font-size: 16px;
                  color: #181818;
                  margin-bottom: 0;
                  a {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
          .request-content-item-title {

          }
          .request-content-item-contents {

          }
        }
      }
    }

    .request-modal-footer {
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