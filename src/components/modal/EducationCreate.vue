<template>
<transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-content-wrapper">
        <div class="modal-header">
          <label>학력사항</label>
        </div>
        <div class="modal-body">
          <input-group label-text="학교명" type="text" placeholder="학교명"/>
          <input-group label-text="직위/직책" type="text" placeholder="직위/직책"/>
          <div class="date-select-wrapper">
            <div class="title-group">
              <label>입학년도</label>
            </div>
            <div class="date-select">
              <select class="date-select-item">
                <option value="년">년</option>
              </select>
              <select class="date-select-item">
                <option value="월">월</option>
              </select>
            </div>
          </div>
          <div class="date-select-wrapper">
            <div class="title-group">
              <label>졸업년도</label>
            </div>
            <div class="date-select">
              <select class="date-select-item">
                <option value="년">년</option>
              </select>
              <select class="date-select-item">
                <option value="월">월</option>
              </select>
            </div>
          </div>

          <div class="education-add-file-wrapper">
            <div class="title-group">
              <label>학력 증빙자료</label>
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
                학력추가
              </button>
            </div>

            <div class="attached-document-list-wrapper">
              <button class="attached-document-list-item">
                졸업증명서.pdf
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33511 9.7729L5.6228 6.06059L1.91049 9.7729L0.849832 8.71224L4.56214 4.99993L0.849832 1.28762L1.91049 0.226959L5.6228 3.93927L9.33511 0.226959L10.3958 1.28762L6.68346 4.99993L10.3958 8.71224L9.33511 9.7729Z" fill="#6C6C6C"/>
                </svg>
              </button>
            </div>
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
import InputGroup from "@/components/molecules/InputGroup.vue";
import TextareaGroup from "@/components/molecules/textareaGroup.vue";

export default {
  name: "EducationCreate",
  components: {CustomButton, InputGroup, TextareaGroup},
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
        .date-select-wrapper {
          margin-top: 20px;
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
          .date-select {
            display: flex;
            flex-direction: row;
            .date-select-item {
              width: 133px;
              height: 40px;
              border: 1px solid #F5F5F5;
              border-radius: 15px;
              padding: 5px;
              margin-right: 10px;
            }
          }
        }
        .education-add-file-wrapper {
          margin-top: 20px;
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
          .attached-document-wrapper {
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
            .attached-document-list-wrapper {
              margin-top: 20px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              .attached-document-list-item {
                width: 130.97px;
                height: 32px;
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
