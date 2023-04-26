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
  name: "ConfirmationOfRequest",
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

</style>