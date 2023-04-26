<template>
<Transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-wrapper">
        <div class="modal-header">
          <label>사업자 등록증 입력</label>
        </div>
        <div class="modal-body">
          <div class="form-input-wrapper">
            <input-group label-text="사업자 이름" :parent-value="name" type="text" width="133" placeholder="홍길동" @child-input="nameTextChanged"/>
            <input-group label-text="사업자 등록번호" :parent-value="regNo" type="text" width="210" @child-input="regNoChanged" />
            <input-group label-text="직원 수" :parent-value="employeeCnt" type="number" width="133" @child-input="employeeChanged" />
          </div>

          <div class="bill-publish">
            <p>세금 계산서 발행 여부</p>
            <check-box-button text="여" :active="isBillActive" @click="billCheckButtonClick(true)"/>
            <check-box-button text="부" :active="!isBillActive" @click="billCheckButtonClick(false)"/>
          </div>
          <div class="attach-wrapper">
            <p>사업자 등록증 첨부</p>
            <file-selector @child-file="fileChanged" />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="button-wrapper">
          <custom-button text="저장하기" button-class="primary mid" @click="submit"/>
          <custom-button text="취소" button-class="natural mid" @click="$emit('close')" />
        </div>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
import CustomInput from "@/components/atoms/CustomInput.vue";
import InputGroup from "@/components/molecules/InputGroup.vue";
import FileSelector from "@/components/molecules/FileSelector.vue";
import CheckBoxButton from "@/components/atoms/CheckBoxButton.vue";
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "CompanyInfoCreate",
  components: {CustomButton, CheckBoxButton, FileSelector, InputGroup, CustomInput},
  props: {
    show: Boolean
  },
  data() {
    return {
      isBillActive: false,
      name: '',
      regNo: '',
      employeeCnt: '',
      file: ''
    }
  },
  methods: {
    submit() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('reg_no', this.regNo)
      formData.append('employee_cnt', this.employeeCnt)
      formData.append('tax_bill', this.isBillActive)
      formData.append('files', this.file)

      this.axios.post('/profile_biz', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          "Content-Type": "multipart/form-data",
        }
      }).then(res => {
        // console.log(res)
        if(res.data.status === 'success') {
          this.$emit('close')
        }
      }).catch(error => {

      })
    },
    billCheckButtonClick(bol) {
      this.isBillActive = bol;
    },
    nameTextChanged(newData) {
      this.name = newData
    },
    regNoChanged(newData) {
      this.regNo = newData
    },
    employeeChanged(newData) {
      this.employeeCnt = newData
    },
    fileChanged(newData) {
      this.file = newData
    },
    getCompanyInfo() {
      this.axios.get('/profile_biz', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        this.name = res.data.data.company_nm
        this.regNo = res.data.data.business_reg_no
        this.employeeCnt = res.data.data.employee_cnt
        this.isBillActive = res.data.data.tax_bill
      }).catch(error => {

      })
    }
  },
  mounted() {
    this.getCompanyInfo()
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
    height: 700px;
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
    .modal-wrapper {
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
      }

      .bill-publish {
        margin-top: 23px;
        p {
          font-size: 16px;
          font-weight: bold;
          color: #2C2C2C;
        }
      }

      .attach-wrapper {
        margin-top: 23px;
        p {
          font-size: 16px;
          font-weight: bold;
          color: #2C2C2C;
        }
      }
    }
    .modal-footer {

    }
  }
}


.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>