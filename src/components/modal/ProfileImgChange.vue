<template>
  <transition name="modal">
    <div class="img-change-modal-mask" v-if="show">
      <div class="img-change-modal-container">
        <div class="img-change-modal-content-wrapper">
          <div class="img-change-modal-header">
            <label>프로필 사진 등록</label>
          </div>
          <div class="img-change-modal-body">
            <label>
              <input type="file" ref="file" @change="onChangedFile" accept="image/png, image/jpeg" />
              <custom-button type="button" text="사진 등록하기" button-class="primary mid" @click="onFileClick"/>
            </label>
            <custom-button type="button" text="기본 이미지로 변경" button-class="natural mid"/>
          </div>
        </div>
        <div class="img-change-modal-footer">
          <div class="button-wrapper">
            <custom-button type="button" text="저장" button-class="natural mid" @click="submit"/>
            <custom-button type="button" text="닫기" button-class="natural mid" @click="$emit('close')"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
export default {
  name: "ProfileImgChange",
  components: {CustomButton},
  props: {
    show: Boolean,
  },
  data() {
    return {
      file: '',
    }
  },
  methods: {
    submit() {
      const formData = new FormData()
      formData.append('avatar', this.file)
      this.axios.post('/auth/avatar', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        // console.log(res)
        this.$store.dispatch('getAvatar')
        this.$emit('close')
      }).catch(error => {

      })
    },
    onFileClick() {
      this.$refs.file.click()
    },
    onChangedFile(event) {
      this.file = event.target.files[0]
    }
  }
}
</script>

<style lang="scss">
.img-change-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;

  .img-change-modal-container {
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

    .img-change-modal-content-wrapper {
      width: 100%;
      flex-direction: column;
      .img-change-modal-header {
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

      .img-change-modal-body {
        margin-top: 50px;
        input[type=file] {
          display: none;
        }
        button {
          margin: 10px 0;
        }
      }
    }
    .img-change-modal-footer {
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
