<template>
<transition name="modal">
  <div class="certificate-doc-modal-mask" v-if="show">
    <div class="certificate-doc-modal-container">
      <div class="certificate-doc-modal-content-wrapper">
        <div class="certificate-doc-modal-header">
          <label>자격증 및 기타서류</label>
        </div>
        <div class="certificate-doc-modal-body">
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
                  <label class="portfolio-img-wrapper">
                    <img src="/assets/icons/plus_icon.png">
                    <input type="file" ref="file" accept="image/png, image/jpeg" @change="onFileChanged"/>
                  </label>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png" v-if="filePreview.length < 1">
                    <img :src="filePreview[0]" v-if="filePreview.length > 0">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png" v-if="filePreview.length < 2">
                    <img :src="filePreview[1]" v-if="filePreview.length > 1">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png" v-if="filePreview.length < 3">
                    <img :src="filePreview[2]" v-if="filePreview.length > 2">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png" v-if="filePreview.length < 4">
                    <img :src="filePreview[3]" v-if="filePreview.length > 3">
                  </div>
                </div>
                <div class="portfolio-add-file-empty">
                  <div class="portfolio-img-wrapper">
                    <img src="/assets/icons/default_upload_img.png" v-if="filePreview.length < 5">
                    <img :src="filePreview[4]" v-if="filePreview.length > 4">
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
            <label class="attached-document-add-btn">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.335 10.627H10.085V15.877H8.58496V10.627H3.33496V9.12695H8.58496V3.87695H10.085V9.12695H15.335V10.627Z" fill="#FF0099"/>
              </svg>
              자격증추가
              <input type="file" ref="file" @change="onDocumentFileChanged"/>
            </label>
<!--            <button class="attached-document-add-btn" @click="$emit('fileAddModalButtonClick', type)">-->
<!--              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M15.335 10.627H10.085V15.877H8.58496V10.627H3.33496V9.12695H8.58496V3.87695H10.085V9.12695H15.335V10.627Z" fill="#FF0099"/>-->
<!--              </svg>-->
<!--              자격증추가-->
<!--            </button>-->
          </div>

          <div class="attached-document-list-wrapper">
            <button class="attached-document-list-item" v-for="(file, index) in docFiles">
              {{file.name}}
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" @click="onDocumentFileRemove(index)">
                <path d="M9.33511 9.7729L5.6228 6.06059L1.91049 9.7729L0.849832 8.71224L4.56214 4.99993L0.849832 1.28762L1.91049 0.226959L5.6228 3.93927L9.33511 0.226959L10.3958 1.28762L6.68346 4.99993L10.3958 8.71224L9.33511 9.7729Z" fill="#6C6C6C"/>
              </svg>
            </button>

<!--            <button class="attached-document-list-item">-->
<!--              사업계획서.pdf-->
<!--              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M9.33511 9.7729L5.6228 6.06059L1.91049 9.7729L0.849832 8.71224L4.56214 4.99993L0.849832 1.28762L1.91049 0.226959L5.6228 3.93927L9.33511 0.226959L10.3958 1.28762L6.68346 4.99993L10.3958 8.71224L9.33511 9.7729Z" fill="#6C6C6C"/>-->
<!--              </svg>-->
<!--            </button>-->

          </div>
        </div>
      </div>
      <div class="certificate-doc-modal-footer">
        <div class="button-wrapper">
          <custom-button type="button" text="저장하기" button-class="primary mid" @click="submit"/>
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
  },
  data() {
    return {
      filePreview: [],
      files: [],
      docFiles: []
    }
  },
  methods: {
    onFileChanged(event) {
      if(this.files.length === 5) {
        alert('이미지는 최대 5개까지 등륵이 가능합니다.')
        return
      }
      const input = event.target
      if(input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.filePreview.push(e.target.result)
          this.files.push(input.files[0])
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    onDocumentFileChanged(event) {
      const input = event.target
      if(input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.docFiles.push(input.files[0])
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    onDocumentFileRemove(index) {
      this.docFiles.splice(index, 1);
    },
    submit() {
      if (this.files.length !== 0) {
        const formData = new FormData()
        for (var j = 0; j < this.files.length; j++) {
          formData.append('files[]', this.files[j])
        }
        for (var i = 0; i < this.docFiles.length; i++) {
          formData.append('files[]', this.docFiles[i])
        }
        this.axios.post('/certificate', formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }).then(res => {
          if (res.data.status === 'success') {
            alert('저장되었습니다!');
            this.$emit('close');
          }
        }).catch(error => {

        })
      } else {
        alert('자격증 이미지 첨부는 필수입니다!');
      }
    }
  }
}
</script>

<style lang="scss">
.certificate-doc-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;

  .certificate-doc-modal-container {
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

    .certificate-doc-modal-content-wrapper {
      width: 100%;

      .certificate-doc-modal-header {
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

      .certificate-doc-modal-body {
        .form-input-wrapper {
          .custom-input-group {
            &:not(:last-child) {
              margin-bottom: 23px;
            }
          }
        }

        .portfolio-add-file-field {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .portfolio-add-file-add {
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
            .portfolio-img-wrapper {
              position: absolute;
              width: 100%;
              height: 100%;
              display: flex;
              img {
                margin: auto;
                width: 20px;
                height: 20px;
              }
              input[type=file] {
                display: none;
              }
            }
          }
          .portfolio-add-file-empty {
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
            .portfolio-img-wrapper {
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
            input[type=file] {
              display: none;
            }
          }
        }

        .attached-document-list-wrapper {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          .attached-document-list-item {
            //width: 130.97px;
            //height: 32px;
            width: 30%;
            //min-width: 130.97px;
            min-height: 32px;
            margin: 0 5px 5px 0;
            border: 1px solid #6C6C6C;
            border-radius: 8px;
            background: transparent;
            svg {
              cursor: pointer;
            }
          }
        }
      }
    }
    .certificate-doc-modal-footer {
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
