<template>
<transition name="modal">
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <div class="modal-content-wrapper">
        <div class="modal-header">
          <label>포트폴리오 등록</label>
        </div>
        <div class="modal-body">
          <div class="form-input-wrapper">
            <input-group label-text="포트폴리오 제목" type="text" placeholder="내용을 입력하세요" :parent-value="title" @child-input="onChangeTitleInput"/>
          </div>

          <div class="portfolio-add-image-wrapper">
            <div class="portfolio-add-image-input-wrapper">
              <div class="title-wrapper">
                <div class="title-label-wrapper">
                  <label>상세이미지</label>
                  <span>이미지는 가로/세로 1:1 비율 권장</span>
                </div>
              </div>
              <div class="portfolio-add-file-field">
                <!-- 이미지 추가 필드 -->
                <div class="portfolio-add-file-add">
<!--                  <div class="portfolio-img-wrapper">-->
<!--                    <img src="/assets/icons/plus_icon.png">-->
<!--                  </div>-->
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

          <div class="work-dt-wrapper">
            <div class="work-dt-title">
              <div class="title-label-wrapper">
                <label>작업기간</label>
              </div>
              <div class="work-dt-input-wrapper">
                <input type="number" placeholder="소요기간(숫자만 입력)" v-model="period">
                <input placeholder="기간" v-model="period_unit">
              </div>
            </div>
          </div>

          <div class="work-price-wrapper">
            <div>
              <div class="title-label-wrapper">
                <label>금액</label>
              </div>
              <div class="work-price-input-wrapper">
                <input placeholder="견적 금액을 입력해주세요" v-model="price">
                <span>원</span>
              </div>
            </div>
          </div>

          <div class="work-detail-wrapper">
            <!-- 작업 내용 -->
            <div class="tab-contents-item">
              <div class="title-label-wrapper">
                <label>작업내용</label>
              </div>
              <textarea rows="5" placeholder="제공 서비스 상세 설명을 해주세요. EX. 제공받은 자료 / 작업 과정 등" v-model="contents"></textarea>
            </div>
          </div>
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
import ProfileInputFileGroup from "@/components/atoms/ProfileInputFileGroup.vue";
import CustomTabInputGroup from "@/components/atoms/CustomTabInputGroup.vue";

export default {
  name: "PortfolioSelect",
  components: {CustomTabInputGroup, CustomButton, InputGroup, ProfileInputFileGroup},
  props: {
    show: Boolean,
  },
  data() {
    return {
      filePreview: [],
      files: [],
      title: '',
      period: '',
      period_unit: '',
      price: '',
      contents: ''
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
    onChangeTitleInput(title) {
      this.title = title
    },
    submit() {
      var formdata = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        formdata.append('files[]', this.files[i]);
      }
      formdata.append('title', this.title);
      formdata.append('period', this.period);
      formdata.append('period_unit', this.period_unit);
      formdata.append('price', this.price);
      formdata.append('contents', this.contents);
      this.axios.post('/portfolios', formdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          "Content-Type": "multipart/form-data",
        }
      }).then(res => {
        if (res.data.status === 'success') {
          alert('저장되었습니다.');
          this.$emit('close');
        }
      });
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
        .form-input-wrapper {
          .custom-input-group {
            &:not(:last-child) {
              margin-bottom: 23px;
            }
          }
        }
        .portfolio-add-image-wrapper {
          margin-top: 30px;
          .portfolio-add-image-input-wrapper {
            .title-wrapper {
              display: flex;
              flex-direction: column;
              width: 100%;
              .title-label-wrapper {
                display: flex;
                flex-direction: column;
                width: 100%;
                label {
                  margin: 0;
                  font-weight: bold;
                  color: #2C2C2C;
                  font-size: 16px;
                }
                span {
                  color: #6C6C6C;
                  font-size: 12px;
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
          }
        }
      }
      .work-dt-wrapper {
        margin-top: 30px;
        .work-dt-title {

        }
        .work-dt-input-wrapper {
          input {
            margin-right: 10px;
            padding: 5px 10px;
            background: #FFFFFF;
            border: 1px solid #D1D1D1;
            border-radius: 10px;
            font-size: 14px;
          }
        }
      }
      .work-price-wrapper {
        margin-top: 30px;
        .work-price-title {

        }
        .work-price-input-wrapper {
          input {
            margin-right: 10px;
            padding: 5px 10px;
            background: #FFFFFF;
            border: 1px solid #D1D1D1;
            border-radius: 10px;
            font-size: 14px;
          }
          span {
            font-size: 14px;
          }
        }
      }
      .work-detail-wrapper {
        margin-top: 30px;
        .tab-contents-item {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding: 0;
          textarea {
            padding: 10px;
            background: #FFFFFF;
            border: 1px solid #D1D1D1;
            border-radius: 10px;
            font-size: 14px;
            resize: none;
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