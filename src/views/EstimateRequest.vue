<template>
  <div class="container">
    <div class="estimate-request-container">
      <div class="step-menu-wrapper">
        <h1>프로젝트 의뢰서 작성</h1>
        <ul class="step-menu">
          <li :class="{'active': step === 1}">1. 세부카테고리</li>
          <li :class="{'active': step === 2}">2. 프로젝트 일정 및 견적요청 마감시간</li>
          <li :class="{'active': step === 3}">3. 지역 및 진행방식</li>
          <li :class="{'active': step === 4}">4. 의뢰내용</li>
          <li :class="{'active': step === 5}">5. 참고내용</li>
          <li :class="{'active': step === 6}">6. 의뢰내용 요청 및 확인</li>
          <li>프로젝트 등록 완료</li>
        </ul>
      </div>
      <div class="content-wrapper">
        <div class="content-backdrop">
          <div class="step-wrapper step-01" v-show="step === 1">
            <h4 class="step-title">세부 카테고리<span class="required">(필수)</span></h4>
            <div class="category-select" v-show="selectedCategory === 0">
              <button class="button natural mid" @click="showCategoryModal = true">카테고리 선택</button>
              <Teleport to="body">
                <project-category-select :show="showCategoryModal" @close="showCategoryModal = false" @selected-category="selectedModalCategory"/>
              </Teleport>
            </div>
            <div class="category-select" v-show="selectedCategory > 0">
              <div class="selected-category-wrapper">
                <div class="selected-category-set">
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" @click="selectedCategory = 0">
                    <path d="M9.3754 9.88545L5.66309 6.17314L1.95078 9.88545L0.890115 8.82479L4.60243 5.11248L0.890115 1.40017L1.95078 0.339508L5.66309 4.05182L9.3754 0.339508L10.4361 1.40017L6.72375 5.11248L10.4361 8.82479L9.3754 9.88545Z" fill="#6C6C6C"/>
                  </svg>
                  <div class="selected-category-title">
                    <span>{{selectedCategoryTitle}}</span><span>></span><span>{{selectedSubCategoryTitle}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="button-wrapper">
              <button class="button primary mid next-btn" @click="changeStep(2)">
                다음
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6281 8H0.201172" stroke="white" stroke-width="2.2"/>
                  <path d="M7.46367 0.5L5.70117 2.2625L11.4262 8L5.70117 13.7375L7.46367 15.5L14.9637 8L7.46367 0.5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="step-wrapper step-02" v-show="step === 2">
            <h4 class="step-title">프로젝트 일정 및 견적요청 마감시간<span class="required">(필수)</span></h4>
            <div class="end-date-wrapper">
              <p>희망 프로젝트 마감일</p>
              <Datepicker
                  v-model="picked"
                  :locale="locale"
                  :ref="inputs.date"
                  :week-starts-on="0"
                  :input-format="inputFormat"
                  class="date-input"
              />
            </div>
            <div class="end-time-wrapper">
              <p>견적요청 마감 시기</p>
              <div class="time-list">
                <button :class="{'active': endTime === 6}" @click="endTime = 6">6시간 뒤</button>
                <button :class="{'active': endTime === 12}" @click="endTime = 12">12시간 뒤</button>
                <button :class="{'active': endTime === 24}" @click="endTime = 24">24시간 뒤</button>
<!--                <button :class="{'active': endTime === 48}" @click="endTime = 48">48시간 뒤</button>-->
              </div>
            </div>
            <div class="button-wrapper">
              <button class="button natural mid prev-btn" @click="step = 1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.29968 8.41333L15.7266 8.41333" stroke="#2C2C2C" stroke-width="2.2"/>
                  <path d="M8.46406 15.9133L10.2266 14.1508L4.50156 8.41333L10.2266 2.67583L8.46406 0.91333L0.964061 8.41333L8.46406 15.9133Z" fill="#2C2C2C"/>
                </svg>
                이전
              </button>
              <button class="button primary mid next-btn" @click="step = 3">
                다음
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6281 8H0.201172" stroke="white" stroke-width="2.2"/>
                  <path d="M7.46367 0.5L5.70117 2.2625L11.4262 8L5.70117 13.7375L7.46367 15.5L14.9637 8L7.46367 0.5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="step-wrapper step-03" v-show="step === 3">
            <h4 class="step-title">지역 및 진행방식<span class="required">(필수)</span></h4>
            <div class="location-select-wrapper">
              <p>지역</p>
              <div class="location-select">
                <data-selector :list-data="cityData" @updateSelectedData="getSelectCity" />
                <data-selector :list-data="cityData2" @updateSelectedData="getSelectCity2" />
              </div>
            </div>
            <div class="process-type-wrapper">
              <p>진행방식</p>
              <div class="process-type">
                <q-radio keep-color v-model="processType" v-for="proceed in proceeds" :val="proceed.id" :label="proceed.title" color="red" />
<!--                <q-radio keep-color v-model="processType" val="1" label="전문가가 있는 곳으로 갈께요" color="red" />-->
<!--                <q-radio keep-color v-model="processType" val="2" label="제가 있는 곳으로 와주세요" color="red" />-->
<!--                <q-radio keep-color v-model="processType" val="3" label="온라인으로 진행 원해요" color="red" />-->
<!--                <q-radio keep-color v-model="processType" val="4" label="진행방식은 따로 협의 해요" color="red" />-->
              </div>
            </div>
            <div class="button-wrapper">
              <button class="button natural mid prev-btn" @click="step = 2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.29968 8.41333L15.7266 8.41333" stroke="#2C2C2C" stroke-width="2.2"/>
                  <path d="M8.46406 15.9133L10.2266 14.1508L4.50156 8.41333L10.2266 2.67583L8.46406 0.91333L0.964061 8.41333L8.46406 15.9133Z" fill="#2C2C2C"/>
                </svg>
                이전
              </button>
              <button class="button primary mid next-btn" @click="changeStep(4)">
                다음
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6281 8H0.201172" stroke="white" stroke-width="2.2"/>
                  <path d="M7.46367 0.5L5.70117 2.2625L11.4262 8L5.70117 13.7375L7.46367 15.5L14.9637 8L7.46367 0.5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="step-wrapper step-04" v-show="step === 4">
            <h4 class="step-title">의뢰내용<span class="required">(필수)</span></h4>
            <p>정확한 상담을 위해 의뢰 내용을 상세히 작성해주세요</p>
            <textarea class="contents" v-model="contentText" placeholder="<프로젝트의 현재 상황>
예시) 프로젝트의 목적, 현재 준비 상황, 진행 계획 등

<상세한 업무 내용>
예시) 사이트의 용도, 주요 기능 List, 작업 분량, 필요한 조건 등

<참고자료 / 유의사항>
예시) 참고사이트, 기타 유의사항 등"></textarea>
            <div class="button-wrapper">
              <button class="button natural mid prev-btn" @click="step = 3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.29968 8.41333L15.7266 8.41333" stroke="#2C2C2C" stroke-width="2.2"/>
                  <path d="M8.46406 15.9133L10.2266 14.1508L4.50156 8.41333L10.2266 2.67583L8.46406 0.91333L0.964061 8.41333L8.46406 15.9133Z" fill="#2C2C2C"/>
                </svg>
                이전
              </button>
              <button class="button primary mid next-btn" @click="changeStep(5)">
                다음
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6281 8H0.201172" stroke="white" stroke-width="2.2"/>
                  <path d="M7.46367 0.5L5.70117 2.2625L11.4262 8L5.70117 13.7375L7.46367 15.5L14.9637 8L7.46367 0.5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="step-wrapper step-05" v-show="step === 5">
            <h4 class="step-title">참고자료</h4>
            <p>미리 준비한 자료 등 참고할 만한 자료가 있으면 상담에 큰 도움이 됩니다</p>
            <div class="file-select-wrapper">
              <label class="file-selector">
                <span>+ 내 파일에서 찾아보기</span>
                <input type="file" id="file" @change="fileSelect"/>
              </label>
              <div class="select-file-list">
                <div class="select-file-item" v-for="(file, index) in files">
<!--                  <p>예비창업패키지 사업계호기서.hwp</p>-->
                  <p>{{file.name}}</p>
                  <button class="file-remove-btn" @click="fileRemove(index)">삭제</button>
                </div>
<!--                <div class="select-file-item">-->
<!--                  <p>예비창업패키지 사업계호기서.hwp</p>-->
<!--                  <button class="file-remove-btn">삭제</button>-->
<!--                </div>-->
              </div>
            </div>
            <div class="button-wrapper">
              <button class="button natural mid prev-btn" @click="step = 4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.29968 8.41333L15.7266 8.41333" stroke="#2C2C2C" stroke-width="2.2"/>
                  <path d="M8.46406 15.9133L10.2266 14.1508L4.50156 8.41333L10.2266 2.67583L8.46406 0.91333L0.964061 8.41333L8.46406 15.9133Z" fill="#2C2C2C"/>
                </svg>
                이전
              </button>
              <button class="button primary mid next-btn" @click="step = 6">
                다음
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6281 8H0.201172" stroke="white" stroke-width="2.2"/>
                  <path d="M7.46367 0.5L5.70117 2.2625L11.4262 8L5.70117 13.7375L7.46367 15.5L14.9637 8L7.46367 0.5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="step-wrapper step-06" v-show="step === 6">
            <h4 class="step-title">의뢰요청 전 확인</h4>
            <p>고객님의 의뢰서를 전문가가 확인 후 견적에 필요한 <b>질문</b>이 도착합니다.<br>
            도착한 <b>질문에 대해 상세히 답변</b>할수록 합리적이고 <b>정확한 견적</b>을 받을 수 있습니다.</p>
            <div class="image-wrapper">
              <img src="/assets/images/step06.png" />
            </div>
            <div class="button-wrapper">
              <button class="button natural mid prev-btn" @click="step = 5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.29968 8.41333L15.7266 8.41333" stroke="#2C2C2C" stroke-width="2.2"/>
                  <path d="M8.46406 15.9133L10.2266 14.1508L4.50156 8.41333L10.2266 2.67583L8.46406 0.91333L0.964061 8.41333L8.46406 15.9133Z" fill="#2C2C2C"/>
                </svg>
                이전
              </button>
              <button class="button primary mid next-btn" @click="submitEstimate">
                의뢰요청하기
              </button>
              <Teleport to="body">
                <request-complete :show="showCompleteModal" @close="showCompleteModal = false" msg="의뢰요청이 완료되었습니다!" @complete-request="completeRequest"/>
              </Teleport>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import Datepicker from 'vue3-datepicker'
import { ref, reactive } from 'vue'
import { ko } from 'date-fns/locale'
import DataSelector from "@/components/atoms/DataSelector.vue";
import ProjectCategorySelect from "@/components/modal/ProjectCategorySelect.vue";
import RequestComplete from "@/components/modal/RequestComplete.vue";

export default {
  name: "EstimateRequest",
  components: { ProjectCategorySelect, DataSelector, CustomButton, Datepicker, RequestComplete },
  setup() {
    const picked = ref(new Date())
    const locale = reactive(ko)
    const inputFormat = ref('yyyy-MM-dd')

    const inputs = {
      date: ref()
    }

    return {
      picked,
      locale,
      inputFormat,
      inputs
    }
  },
  data() {
    return {
      step: 1,
      endTime: 6,
      model: ref(null),
      cityData: Array,
      cityData2: Array,
      selectedData: '',
      selectedData2: '',
      selectedCategory: 0,
      selectedCategoryTitle: '',
      selectedSubCategory: 0,
      selectedSubCategoryTitle: '',
      categoryDescription: '',
      processType: '',
      showCategoryModal: false,
      files: ref([]),
      selectCategory: null,
      contentText: null,
      showCompleteModal: false,
      proceeds: ref([])
    }
  },
  methods: {
    getCityData() {
      this.axios('/city').then(res => {
        this.cityData = res.data.data
      })
    },
    getCityData2(id) {
      this.axios('/city/'+id).then(res => {
        this.cityData2 = res.data.data
      })
    },
    getSelectCity(id) {
      this.selectedData = id
    },
    getSelectCity2(id) {
      this.selectedData2 = id
    },
    selectedModalCategory(category) {
      if (category['categoryId'] !== 0 && category['subId'] !== 0) {
        this.showCategoryModal = false;
        this.selectedCategory = category['categoryId'];
        this.selectedCategoryTitle = category['categoryTitle'];
        this.selectedSubCategory = category['subId'];
        this.selectedSubCategoryTitle = category['subTitle'];
        this.categoryDescription = category['desc'];
      } else {
        alert('카테고리 선택은 필수입니다!');
      }
    },
    submitEstimate() {
      const formData = new FormData();
      formData.append('category_id', this.selectedSubCategory);
      formData.append('city_id', this.selectedData2);
      formData.append('contents', this.contentText);
      formData.append('end_time', this.endTime + '시간');
      formData.append('end_date', this.inputs['date']?.value.input);
      this.axios.post('/estimate', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          console.log(res.data.data)
          const estimateId = res.data.data.id
          if (this.files.length > 0) {
            // File upload
            const attachFormData = new FormData();
            for (var i = 0; i < this.files.length; i++) {
              attachFormData.append('files[]', this.files[i]);
            }
            attachFormData.append('estimate_id', estimateId);
            this.axios.post('/estimate_attach', attachFormData, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
              }
            }).then(res => {
              if (res.status === 200) {
                this.showCompleteModal = true;
              }
            }).catch(e => {

            });
          } else {
            this.showCompleteModal = true;
          }
        }
      }).catch(error => {

      });
    },
    changeStep(step) {
      switch (step) {
        case 2:
          if (this.selectedCategory === 0) {
            alert('카테고리 선택은 필수입니다!');
            return;
          }
          break;
        case 3:
          break;
        case 4:
          // console.log(this.selectedData2);
          if (this.selectedData2 === '') {
            alert('지역 선택은 필수입니다!');
            return;
          }
          if (this.processType === '') {
            alert('진행 방식을 선택해주세요!');
            return;
          }
          break;
        case 5:
          if (this.contentText === null) {
            alert('의뢰내용은 필수입니다!');
            return;
          }
          if (this.contentText.length < 10) {
            alert('의뢰내용은 10글자 이상 상세히 작성해주세요!');
            return;
          }
          break;
        default:
      }
      this.step = step;
    },
    fileSelect(e) {
      if (this.files === null) {
        this.files = [];
      }
      this.files.push(e.target.files[0])
      // console.log(this.files.length)
    },
    fileRemove(index) {
      this.files.splice(index, 1)
    },
    completeRequest() {
      // 요청목록 이동
      this.$router.push('/myrequest')
    },
    getEstimateProceeds() {
      this.axios.get('/estimate_proceed', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.proceeds = res.data.data
        }
      })
    }
  },
  mounted() {
    this.getCityData()
    this.getEstimateProceeds()
  },
  watch: {
    selectedData(id) {
      this.getCityData2(id)
    }
  }
}
</script>

<style lang="scss">
body {
  background: #eeeeee;
}
.estimate-request-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 40px;
  box-sizing: border-box;
  margin-bottom: 400px;
  //background: #eeeeee;
  .step-menu-wrapper {
    & > h1 {
      font-size: 32px;
      font-weight: bold;
    }
    .step-menu {
      list-style: none;
      padding: 0;
      margin: 40px 0 0 0;
      li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        padding-left: 17px;
        &.active {
          border-left: 2px solid #FF0099;
          color: #FF0099;
          font-weight: bold;
        }
        height: 44px;
        border-left: 2px solid #C1C1C1;
      }
    }
  }
  .content-wrapper {
    margin-top: 120px;
    .content-backdrop {
      width: 760px;
      border-radius: 20px;
      background: white;
      box-shadow: 0px 12px 24px 0px rgba(207, 215, 226, 0.54);
      padding: 30px 60px;
      box-sizing: border-box;
      .step-wrapper {
        &.step-01 {
          .category-select {
            margin: 20px 0 0;
            .button {
              width: 132px;
              font-size: 14px;
              font-weight: normal;
            }
            .selected-category-wrapper {
              position: relative;
              .selected-category-set {
                position: absolute;
                border: 1px solid #6C6C6C;
                border-radius: 20px;
                width: 388px;
                height: 80px;
                display: flex;
                justify-content: space-around;
                svg {
                  position: absolute;
                  top: 10px;
                  right: 8px;
                  cursor: pointer;
                }
                .selected-category-title {
                  font-size: 16px;
                  font-weight: bold;
                  color: #2C2C2C;
                  margin: auto;
                  span {
                    margin: 10px;
                  }
                }
              }
            }
          }
        }
        &.step-02 {
          .end-date-wrapper {
            margin-top: 40px;
            & > p {
              color: #424242;
              font-weight: bold;
              margin-top: 0px;
              margin-bottom: 10px;
              font-size: 16px;
            }
            .date-input {
              border: 1px solid #6C6C6C;
              background: white;
              border-radius: 5px;
              height: 40px;
              box-sizing: border-box;
              padding: 5px 12px;
            }
          }
          .end-time-wrapper {
            margin-top: 80px;
            & > p {
              color: #424242;
              font-weight: bold;
              margin-top: 0px;
              margin-bottom: 10px;
              font-size: 16px;
            }
            .time-list {
              button {
                width: 140px;
                height: 40px;
                border-radius: 12px;
                background: white;
                border: 1px solid #2C2C2C;
                cursor: pointer;
                &:not(:last-child) {
                  margin-right: 10px;
                }
                &.active {
                  border: 1px solid #FF0099;
                  color: #FF0099;
                  font-weight: bold;
                }
              }
            }
          }

        }
        &.step-03 {
          .location-select-wrapper {
            margin-top: 40px;
            & > p {
              color: #424242;
              font-weight: bold;
              margin-top: 0px;
              margin-bottom: 10px;
              font-size: 16px;
            }
            .location-select {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              .custom-select {
                &:first-child {
                  margin-right: 10px;
                }
              }
            }
          }
          .process-type-wrapper {
            margin-top: 80px;
            & > p {
              color: #424242;
              font-weight: bold;
              margin-top: 0px;
              margin-bottom: 10px;
              font-size: 16px;
            }
            .process-type {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }
        }
        &.step-04 {
          & > p {
            color: #424242;
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 16px;
            margin-top: 40px;
          }
          .contents {
            width: 640px;
            height: 465px;
            border-radius: 12px;
            padding: 30px 40px;
            box-sizing: border-box;
          }
          .button-wrapper {
            margin-top: 40px;
          }
        }
        &.step-05 {
          & > p {
            color: #424242;
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 16px;
            margin-top: 40px;
          }
          .file-select-wrapper {
            .file-selector {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 80px;
              border: 1px dashed #FF0099;
              color: #FF0099;
              font-size: 16px;
              border-radius: 12px;
              font-weight: bold;
              cursor: pointer;
              input[type=file] {
                display: none;
              }
            }
            .select-file-list {
              display: flex;
              flex-direction: column;
              width: 640px;
              height: 350px;
              border: 1px solid #EEEEEE;
              border-radius: 12px;
              margin-top: 20px;
              padding: 22px 25px;
              box-sizing: border-box;
              .select-file-item {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                &:not(:last-child) {
                  margin-bottom: 20px;
                }
                p {
                  margin: 0;
                  text-decoration: underline;
                  margin-right: 10px;
                }
                .file-remove-btn {
                  background: transparent;
                  border: none;
                  cursor: pointer;
                  color: #6C6C6C;
                  font-size: 14px;
                }
              }
            }
          }
          .button-wrapper {
            margin-top: 45px;
          }
        }
        &.step-06 {
          & > p {
            color: #424242;
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 16px;
            margin-top: 40px;
            b {
              color: black;
            }
          }
          .image-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            img {
              width: 537px;
              margin-top: 42px;
            }
          }
          .button-wrapper {
            margin-top: 40px;
          }
        }
        .step-title {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
          .required {
            font-size: 14px;
            color: #FF0099;
            font-weight: bold;
          }
        }
        .button-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-top: 164px;
          .prev-btn {
            width: 160px;
            position: relative;
            margin-right: 10px;
            svg {
              position: absolute;
              left: 20px;
            }
          }
          .next-btn {
            width: 160px;
            position: relative;
            svg {
              position: absolute;
              right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>