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
                <li>세부 카테고리
                  <ul>
                    <li>
                      <span>{{items.has_category.title}}</span>
                    </li>
                  </ul>
                </li>
                <li>프로젝트 희망 마감일정
                  <ul>
                    <li>
                      <span>{{items.end_date}}</span>
                    </li>
                  </ul>
                </li>
                <li>지역 및 진행방식
                  <ul>
                    <li>
                      <span>{{items.has_city.fullname}}</span>
                    </li>
                    <li>
                      <span>{{items.has_proceed.title}}</span>
                    </li>
                  </ul>
                </li>
                <li>의뢰내용
                  <ul>
                    <li v-for="content in items.contents.split('\r\n')">
                      <span>{{content}}</span>
                    </li>
                  </ul>
                </li>
                <li>참고자료
                  <ul>
                    <li v-for="file in items.has_attach">
                      <span>{{file.has_file.origin_name}}</span>
                    </li>
                  </ul>
                </li>
              </ol>
<!--              <ol type="1">-->
<!--                <li v-for="item in items">{{item.title}}-->
<!--                  <ul>-->
<!--                    <li v-for="content in item.contents">-->
<!--                      <span v-show="item.id !== 5">{{content}}</span>-->
<!--                      <router-link to="" v-show="item.id === 5">{{content}}</router-link>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </li>-->
<!--              </ol>-->
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
    show: Boolean,
    estimateId: String
  },
  data() {
    return {
      items: {
        "has_attach": [{
          "has_file": {}
        }],
        "has_detail": [],
        "has_question": [],
        "has_user": {},
        "has_category": {},
        "has_proceed": {},
        "has_city": {}
      }
    }
  },
  methods: {
    getEstimate() {
      this.axios.get('/estimate/' + this.estimateId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.items = res.data.data
        }
      }).catch(e => {

      })
    }
  },
  mounted() {
    this.getEstimate()
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