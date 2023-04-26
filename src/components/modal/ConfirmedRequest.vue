<template>
  <Transition name="modal">
    <div class="confirmed-request-modalmask" v-if="show">
      <div class="confirmed-request-modalcontainer">
        <div class="confirmed-request-modalcontent-wrapper">
          <div class="confirmed-request-modalheader">
            <label>{{name}} 전문가에게 의뢰하기</label>
          </div>
          <div class="confirmed-request-modalbody">
            <p>의뢰하기 전 견적산출 근거와
              전문가의 프로필을 상세하게 확인하면
              성공적인 프로젝트 수행에 도움이 됩니다.</p>
          </div>
        </div>
        <div class="confirmed-request-modalfooter">
          <div class="button-wrapper">
            <custom-button type="button" text="프로젝트 의뢰하기" button-class="primary mid" @click="sendContractRequest"/>
            <custom-button type="button" text="취소" button-class="natural mid" @click="$emit('close')"/>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "ConfirmedRequest",
  components: {CustomButton},
  props: {
    show: Boolean,
    name: String,
    detailId: Number
  },
  methods: {
    sendContractRequest() {
      this.axios.get('/estimate_detail/contract/' + this.detailId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.$router.push('/chat-list')
          this.$emit('close')
        }
      }).catch(e => {

      })
    }
  }
}
</script>

<style lang="scss">
.confirmed-request-modalmask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .confirmed-request-modalcontainer {
    width: 500px;
    height: 350px !important;
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
    .confirmed-request-modalcontent-wrapper {
      width: 100%;
      .confirmed-request-modalheader {
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
      .confirmed-request-modalbody {
        margin-top: 60px;
        display: flex;
        p {
          margin: auto;
          width: 50%;
          text-align: center;
        }
      }
    }

    .confirmed-request-modalfooter {
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
          font-size: 16px;
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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