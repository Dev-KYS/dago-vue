<template>
<transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-content-wrapper">
        <div class="modal-header">
          <label>자격증 및 기타서류</label>
        </div>
        <div class="modal-body">
          <div class="portfolio-add-image-wrapper">
            <div class="portfolio-add-image-input-wrapper">
              <div class="title-wrapper">
                <div class="title-label-wrapper">
                  <label>자격증 및 기타 서류 업로드</label>
                </div>
              </div>
              <div class="portfolio-add-file-field">
                <!-- 이미지 추가 필드 -->
                <div class="portfolio-add-file-add">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/plus_icon.png">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="attached-document-wrapper">
            <div class="title-wrapper">
              <div class="title-label-wrapper">
                <label>첨부자료</label><span style="font-size: 16px; color:#6C6C6C;">(서류형태 자료)</span>
              </div>
            </div>
            <button class="attached-document-add-btn" @click="$emit('fileAddModalButtonClick', type)">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.335 10.627H10.085V15.877H8.58496V10.627H3.33496V9.12695H8.58496V3.87695H10.085V9.12695H15.335V10.627Z" fill="#FF0099"/>
              </svg>
              자격증추가
            </button>
          </div>

          <div class="attached-document-list-wrapper">
            <button class="attached-document-list-item">
              사업계획서.pdf
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33511 9.7729L5.6228 6.06059L1.91049 9.7729L0.849832 8.71224L4.56214 4.99993L0.849832 1.28762L1.91049 0.226959L5.6228 3.93927L9.33511 0.226959L10.3958 1.28762L6.68346 4.99993L10.3958 8.71224L9.33511 9.7729Z" fill="#6C6C6C"/>
              </svg>
            </button>

            <button class="attached-document-list-item">
              사업계획서.pdf
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33511 9.7729L5.6228 6.06059L1.91049 9.7729L0.849832 8.71224L4.56214 4.99993L0.849832 1.28762L1.91049 0.226959L5.6228 3.93927L9.33511 0.226959L10.3958 1.28762L6.68346 4.99993L10.3958 8.71224L9.33511 9.7729Z" fill="#6C6C6C"/>
              </svg>
            </button>

            <button class="attached-document-list-item">
              사업계획서.pdf
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33511 9.7729L5.6228 6.06059L1.91049 9.7729L0.849832 8.71224L4.56214 4.99993L0.849832 1.28762L1.91049 0.226959L5.6228 3.93927L9.33511 0.226959L10.3958 1.28762L6.68346 4.99993L10.3958 8.71224L9.33511 9.7729Z" fill="#6C6C6C"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
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
import ProfileInputFileGroup from "@/components/atoms/ProfileInputFileGroup.vue";
import CustomFileInputGroup from "@/components/atoms/CustomFileInputGroup.vue";

export default {
  name: "CertificateDocument",
  components: {ProfileInputFileGroup, CustomFileInputGroup, CustomButton},
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;

  .modal-container {
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

    .modal-content-wrapper {
      width: 100%;

      .modal-header {
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

      .modal-body {
        .form-input-wrapper {
          .custom-input-group {
            &:not(:last-child) {
              margin-bottom: 23px;
            }
          }
        }

        .attached-document-wrapper {
          margin-top: 20px;
          .attached-document-add-btn {
            width: 149px;
            height: 32px;
            margin-top: 5px;
            background: transparent;
            border: 1px solid #FF0099;
            color: #FF0099;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            svg {
              margin-right: 8px;
            }
          }
        }

        .attached-document-list-wrapper {
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .attached-document-list-item {
            width: 130.97px;
            height: 32px;
            border: 1px solid #6C6C6C;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
            background: transparent;
          }
        }
      }
    }
    .modal-footer {
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
