<template>
  <transition name="modal">
    <div class="save-modal-mask" v-if="show">
      <div class="save-modal-container">
        <div class="save-modal-content-wrapper">
          <div class="save-modal-body">
            <div class="save-complete-msg-wrapper">
              <div class="save-complete-msg-icon">
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_275_10104" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="43" height="43">
                    <rect x="0.65332" y="0.628906" width="42" height="42" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_275_10104)">
                    <path d="M17.191 31.8665L7.39099 22.0665L9.27224 20.1852L17.191 28.104L33.991 11.304L35.8722 13.1852L17.191 31.8665Z" fill="#FF0099"/>
                  </g>
                </svg>
              </div>
              <div class="save-complete-msg">
                <p>{{msg}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="save-modal-footer">
          <div class="button-wrapper">
            <custom-button type="button" text="닫기" button-class="natural mid" @click="close"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
export default {
  name: "RequestComplete",
  components: {CustomButton},
  props: {
    show: Boolean,
    msg: String
  },
  methods: {
    close() {
      this.$emit('complete-request')
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.save-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .save-modal-container {
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

    .save-modal-content-wrapper {
      width: 100%;
      display: flex;
      .save-modal-body {
        margin: 50px auto;
        .save-complete-msg-wrapper {
          margin: auto;
          display: flex;
          flex-direction: column;
          .save-complete-msg-icon {
            width: 70px;
            height: 70px;
            background: #FFEBF7;
            border-radius: 50%;
            margin: auto;
            display: flex;
            svg {
              margin: auto;
            }
          }
          .save-complete-msg {
            margin-top: 20px;
            p {
              font-weight: bold;
              font-size: 26px;
              line-height: 36px;
              color: #2C2C2C;
            }
          }
        }
      }
    }
    .save-modal-footer {
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
