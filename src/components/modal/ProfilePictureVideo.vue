<template>
  <transition name="modal">
    <div class="picture-modal-mask" v-if="show">
      <div class="picture-modal-container">
        <div class="picture-modal-content-wrapper">
          <div class="picture-modal-header">
            <label>사진 및 동영상</label>
          </div>
          <div class="picture-modal-body">
            <div class="title-group">
              <label>사진 업로드</label>
            </div>
            <div class="category-tooltip">
              <span style="color: #FF0099">Tip.</span><span> 프로젝트 진행 결과 / 전문가님을 나타낼 수 있는 이미지 등을 업로드 해주세요</span>
            </div>
            <div class="picture-add-file-field">
              <!-- 이미지 추가 필드 -->
              <div class="picture-add-file-add">
                <div class="picture-img-wrapper">
                  <img src="/assets/icons/plus_icon.png">
                </div>
              </div>
              <div class="picture-add-file-empty">
                <div class="picture-img-wrapper">
                  <img src="/assets/icons/default_upload_img.png">
                </div>
              </div>
              <div class="picture-add-file-empty">
                <div class="picture-img-wrapper">
                  <img src="/assets/icons/default_upload_img.png">
                </div>
              </div>
              <div class="picture-add-file-empty">
                <div class="picture-img-wrapper">
                  <img src="/assets/icons/default_upload_img.png">
                </div>
              </div>
              <div class="picture-add-file-empty">
                <div class="picture-img-wrapper">
                  <img src="/assets/icons/default_upload_img.png">
                </div>
              </div>
              <div class="picture-add-file-empty">
                <div class="picture-img-wrapper">
                  <img src="/assets/icons/default_upload_img.png">
                </div>
              </div>
            </div>
            <input-group label-text="동영상 업로드" placeholder="유튜브 URL 입력" />
          </div>
        </div>
        <div class="picture-modal-footer">
          <div class="button-wrapper">
            <custom-button type="button" text="저장하기" button-class="primary mid" />
            <custom-button type="button" text="취소" button-class="natural mid" @click="$emit('close')"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import InputGroup from "../molecules/InputGroup.vue";
export default {
  name: "ProfilePictureVideo",
  components: {InputGroup, CustomButton},
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss">
.picture-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;

  .picture-modal-container {
    width: 500px;
    height: 450px !important;
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

    .picture-modal-content-wrapper {
      width: 100%;

      .picture-modal-header {
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

      .picture-modal-body {
        .title-group {
          display: flex;
          flex-direction: column;
          width: 100%;
          label {
            font-weight: bold;
            color: #2C2C2C;
            font-size: 16px;
          }
        }
        .category-tooltip {
          margin-top: 10px;
          background: #FFEBF8;
          border-radius: 10px;
          padding: 10px 20px;
          span {
            font-size: 12px;
          }
        }
        .picture-add-file-field {
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .picture-add-file-add {
            flex: 1 1 16%;
            margin: 5px;
            background: #FFFFFF;
            border-radius: 10px;
            border: 1px solid #FF0099;
            color: #FF0099;
            font-size: 60px;
            position: relative;
            &:after {
              content: "";
              display: block;
              padding-bottom: 100%;
            }
            .picture-img-wrapper {
              position: absolute;
              width: 100%;
              height: 100%;
              display: flex;
              img {
                margin: auto;
                width: 20px;
                height: 20px;
              }
            }
          }
          .picture-add-file-empty {
            flex: 1 1 16%;
            margin: 5px;
            border-radius: 10px;
            border: 0;
            background: #F9F9F9;
            position: relative;
            &:after {
              content: "";
              display: block;
              padding-bottom: 100%;
            }
            .picture-img-wrapper {
              position: absolute;
              width: 100%;
              height: 100%;
              display: flex;
              img {
                margin: auto;
                width: 45%;
                height: 45%;
              }
            }
          }
        }
      }
    }
    .picture-modal-footer {
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
