<template>
<transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-content-wrapper">
        <div class="modal-header">
          <label>학력사항</label>
        </div>
        <div class="modal-body">
          <input-group label-text="학교명" type="text" placeholder="학교명" :parent-value="schoolName" @child-input="schoolNmChanged"/>
          <input-group label-text="직위/직책" type="text" placeholder="전공" :parent-value="speciality" @child-input="specialityChanged"/>
          <div class="date-select-wrapper">
            <div class="title-group">
              <label>입학년도</label>
            </div>
            <div class="date-select">
              <select class="date-select-item" v-model="joinYear">
                <option value="">년</option>
                <option v-for="item in yearList" :value="item">{{item}}년</option>
              </select>
              <select class="date-select-item" v-model="joinMonth">
                <option value="">월</option>
                <option value="01">1월</option>
                <option value="02">2월</option>
                <option value="03">3월</option>
                <option value="04">4월</option>
                <option value="05">5월</option>
                <option value="06">6월</option>
                <option value="07">7월</option>
                <option value="08">8월</option>
                <option value="09">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
              </select>
            </div>
          </div>
          <div class="date-select-wrapper">
            <div class="title-group">
              <label>졸업년도</label>
            </div>
            <div class="">
              <q-checkbox keep-color v-model="isAttending" label="현재 재학 / 휴학중" color="red" />
            </div>
            <div class="date-select" v-if="isAttending === false">
              <select class="date-select-item" v-model="graduatedYear">
                <option value="">년</option>
                <option v-for="item in yearList" :value="item">{{item}}년</option>
              </select>
              <select class="date-select-item" v-model="graduatedMonth">
                <option value="">월</option>
                <option value="01">1월</option>
                <option value="02">2월</option>
                <option value="03">3월</option>
                <option value="04">4월</option>
                <option value="05">5월</option>
                <option value="06">6월</option>
                <option value="07">7월</option>
                <option value="08">8월</option>
                <option value="09">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
              </select>
            </div>
          </div>

          <div class="education-add-file-wrapper">
            <div class="title-group">
              <label>학력 증빙자료</label>
            </div>
            <div class="attached-document-wrapper">
              <file-selector @child-file="fileChanged" />

<!--              <button class="attached-document-add-btn" @click="$emit('fileAddModalButtonClick', type)">-->
<!--                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path d="M15.335 10.627H10.085V15.877H8.58496V10.627H3.33496V9.12695H8.58496V3.87695H10.085V9.12695H15.335V10.627Z" fill="#FF0099"/>-->
<!--                </svg>-->
<!--                학력추가-->
<!--              </button>-->

<!--              <div class="attached-document-list-wrapper">-->
<!--                <button class="attached-document-list-item">-->
<!--                  졸업증명서.pdf-->
<!--                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path d="M9.33511 9.7729L5.6228 6.06059L1.91049 9.7729L0.849832 8.71224L4.56214 4.99993L0.849832 1.28762L1.91049 0.226959L5.6228 3.93927L9.33511 0.226959L10.3958 1.28762L6.68346 4.99993L10.3958 8.71224L9.33511 9.7729Z" fill="#6C6C6C"/>-->
<!--                  </svg>-->
<!--                </button>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="button-wrapper">
          <custom-button type="button" text="저장하기" button-class="primary mid" @click="submit" />
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
import {useStore} from "vuex";
import FileSelector from "@/components/molecules/FileSelector.vue";

export default {
  name: "EducationCreate",
  components: {FileSelector, CustomButton, InputGroup, TextareaGroup},
  props: {
    show: Boolean
  },
  setup() {
    const {dispatch} = useStore()
    dispatch('getEducationAction')
  },
  mounted() {
    this.yearListInit()
  },
  computed: {
    getInitData() {
      this.schoolName = this.$store.getters.getEducationData.schoolName
      this.speciality = this.$store.getters.getEducationData.speciality
      this.joinYear = this.$store.getters.getEducationData.joinYear
      this.joinMonth = this.$store.getters.getEducationData.joinMonth
      this.graduatedYear = this.$store.getters.getEducationData.graduatedYear
      this.graduatedMonth = this.$store.getters.getEducationData.graduatedMonth
      this.isAttending = this.$store.getters.getEducationData.isAttending
      return this.$store.getters.getEducationData
    }
  },
  data() {
    return {
      schoolName: '',
      speciality: '',
      joinYear: '',
      joinMonth: '',
      graduatedYear: '',
      graduatedMonth: '',
      isAttending: false,
      yearList: [],
      file: '',
    }
  },
  methods: {
    fileChanged(newData) {
      this.file = newData
    },
    schoolNmChanged(newData) {
      this.schoolName = newData
    },
    specialityChanged(newData) {
      this.speciality = newData
    },
    yearListInit() {
      const date = new Date()
      const nowYear = date.getFullYear()
      for(let i = 1980; i <= nowYear; i++) {
        this.yearList.unshift(i)
      }
    },
    submit() {
      const formData = new FormData()
      formData.append('school_nm', this.schoolName)
      formData.append('speciality', this.speciality)
      formData.append('join_year', this.joinYear+this.joinMonth+'01')
      if(this.file !== '') {
        formData.append('files', this.file)
      }
      if(this.isAttending === false) {
        formData.append('graduated_year', this.graduatedYear+this.graduatedYear+'01')
      }
      formData.append('is_attending', this.isAttending)
      this.axios.post('/education', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          "Content-Type": "multipart/form-data",
        }
      }).then(res => {
        console.log(res)
        this.$emit('close')
      }).catch(error => {
        console.log(error)
      })
    }
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
