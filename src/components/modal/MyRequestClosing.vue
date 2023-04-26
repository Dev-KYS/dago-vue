<template>
  <transition name="modal">
    <div class="request-closing-modal-mask" v-if="show">
      <div class="request-closing-modal-container">
        <div class="request-closing-modal-content-wrapper">
          <div class="request-closing-modal-header">
            <label>의뢰 요청 마감하기</label>
          </div>
          <div class="request-closing-modal-body">
            <q-radio v-model="picked" v-for="item in types" :label="item.title" :val="item.id" color="red"/>
          </div>
        </div>
        <div class="request-closing-modal-footer">
          <div class="button-wrapper">
            <custom-button type="button" text="의뢰 마감하기" button-class="primary mid" @click="requestFinishType"/>
            <custom-button type="button" text="취소" button-class="natural mid" @click="$emit('close')"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import CustomCheckbox from "@/components/atoms/CustomCheckbox.vue";

export default {
  name: "MyRequestClosing",
  components: {CustomCheckbox, CustomButton},
  props: {
    show: Boolean,
    types: {}
  },
  data() {
    return {
      picked: {},
      // items: [
      //   {id: 1, title: '다고 내 전문가와 프로젝트 확정'},
      //   {id: 2, title: '다른 방법으로 프로젝트 진행'},
      //   {id: 3, title: '프로젝트 계획의 변경'},
      //   {id: 4, title: '마음에 드는 전문가가 없음'}
      // ]
    }
  },
  methods: {
    requestFinishType() {
      const id = this.$route.query.id

      const formData = new FormData
      formData.append('estimate_id', id)
      formData.append('finish_id', this.picked)
      this.axios.post('/estimate/finish', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.$emit('finishComplete')
          this.$emit('close')
        }
      })
    }
  },
  emits: [
      'finishComplete'
  ]
}
</script>

<style lang="scss">
.request-closing-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .request-closing-modal-container {
    width: 500px;
    height: 400px !important;
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
    .request-closing-modal-content-wrapper {
      width: 100%;
      .request-closing-modal-header {
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
      .request-closing-modal-body {
        display: flex;
        flex-direction: column;
        label {
          input[type="radio"] {
            &:checked {
              border: 0.4em solid #FF0099;
              background-color: #FF0099;
            }
          }
          span {
            margin-left: 5px;
          }
        }
      }
    }

    .request-closing-modal-footer {
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