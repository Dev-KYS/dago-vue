<template>
<transition name="modal">
<div class="modal-mask" v-if="show">
  <div class="modal-container">
    <div class="modal-content-wrapper">
      <div class="modal-header">
        <label>경력사항</label>
      </div>
      <div class="modal-body">
        <input-group label-text="회사명" type="text" :parent-value="companyName" @child-input="companyNmChanged" placeholder="회사명"/>
        <input-group label-text="직위/직책" type="text" :parent-value="position" @child-input="positionChanged" placeholder="직위/직책"/>
        <div class="date-select-wrapper">
          <div class="title-group">
            <label>시작일</label>
          </div>
          <div class="date-select">
            <select class="date-select-item" v-model="startDtYear">
              <option value="">년</option>
              <option v-for="item in yearList" :value="item">{{item}}년</option>
            </select>
            <select class="date-select-item" v-model="startDtMonth">
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
            <label>종료일</label>
          </div>
          <div>
            <q-checkbox keep-color v-model="isAttending" label="재직중" color="red" />
          </div>
          <div class="date-select" v-if="isAttending === false">
            <select class="date-select-item" v-model="endDtYear">
              <option value="">년</option>
              <option v-for="item in yearList" :value="item">{{item}}년</option>
            </select>
            <select class="date-select-item" v-model="endDtMonth">
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
        <textarea-group label="상세 설명" rows="3" :parent-value="description" @child-input="descriptionChanged" placeholder="경력에 대한 상세한 설명을 작성해 주세요"/>
      </div>
    </div>
    <div class="modal-footer">
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
import InputGroup from "@/components/molecules/InputGroup.vue";
import TextareaGroup from "@/components/molecules/textareaGroup.vue";

export default {
  name: "CareerCreate",
  components: {TextareaGroup, InputGroup, CustomButton},
  props: {
    show: Boolean
  },
  mounted() {
    this.yearListInit()
  },
  data() {
    return {
      companyName: '',
      position: '',
      startDtYear: '',
      startDtMonth: '',
      endDtYear: '',
      endDtMonth: '',
      isAttending: false,
      description: '',
      yearList: [],
    }
  },
  methods: {
    submit() {
      const formData = new FormData()
      formData.append('company_nm', this.companyName)
      formData.append('position', this.position)
      formData.append('start_year', this.startDtYear+this.startDtMonth+'01')
      if(this.isAttending === false) {
        formData.append('end_year', this.endDtYear+this.endDtMonth+'01')
      }
      formData.append('is_attending', this.isAttending)
      formData.append('description', this.description)

      this.axios.post('/career', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        this.$store.dispatch('getCareerList')
        this.$emit('close')
      }).catch(error => {

      })
    },
    companyNmChanged(newData) {
      this.companyName = newData
    },
    positionChanged(newData) {
      this.position = newData
    },
    descriptionChanged(newData) {
      this.description = newData
    },
    yearListInit() {
      const date = new Date()
      const nowYear = date.getFullYear()
      for(let i = 1980; i <= nowYear; i++) {
        this.yearList.unshift(i)
      }
    },
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
