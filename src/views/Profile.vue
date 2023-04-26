<template>
<div class="profile-container">
  <label class="profile-title">전문가 소개</label>
  <div class="profile-wrapper">
    <div class="profile-img-wrapper">
      <img class="profile-img" src="/assets/icons/default_user_icon.png" v-if="avatar === ''" />
      <img class="profile-img" :src="'http://localhost:8000/avatars/' + avatar" v-if="avatar !== ''" />
      <button class="profile-edit-btn" @click="showProfileImgChangeModal = true">
        <img src="/assets/icons/edit.png" />
      </button>
      <Teleport to="body">
        <profile-img-change :show="showProfileImgChangeModal" @close="showProfileImgChangeModal = false"/>
      </Teleport>
    </div>
  </div>

  <div class="business-yn-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>사업자 등록 여부</label>
      </div>
    </div>
    <div class="business-btn">
      <button class="check-btn" :class="{'active': businessYn === true}" @click="this.companyCreate(true)">여</button>
      <button class="check-btn" :class="{'active': businessYn === false}" @click="companyCreate(false)">부</button>
      <Teleport to="body">
        <company-info-create :show="showCompanyModal" @close="showCompanyModal = false" />
      </Teleport>
    </div>
  </div>

<!--  <div class="name-select-wrapper">-->
<!--    <input-group labelText="이름" @child-input="onChangedCompanyName" />-->
<!--  </div>-->

  <div class="category-select-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>제공 서비스</label>
        <p>필수</p>
      </div>
      <button class="category-add-btn" @click="showCategoryModal = true">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.335 10.627H10.085V15.877H8.58496V10.627H3.33496V9.12695H8.58496V3.87695H10.085V9.12695H15.335V10.627Z" fill="#FF0099"/>
        </svg>
        서비스 추가
      </button>
      <Teleport to="body">
        <category-select :show="showCategoryModal" @close="showCategoryModal = false" />
      </Teleport>
    </div>
    <div class="category-wrapper">
      <div class="category-select-tab">
        <button
          v-for="(tab, index) in categoryList"
          :key="index"
          @click.prevent="currentTab = index"
          class="category-tab"
          :class="{'active': currentTab === index}">
          {{ tab.has_category.title }}
        </button>
      </div>
      <div class="tab-contents" :class="{'active': currentTab === index}" v-for="(item, index) in categoryList" :key="index">
        <custom-tab-input-group label="제공 서비스 소개" @child-input="onChangedIntro" @input="inputText(item.id, 'intro')" :text="item.intro" desc="ex) 창업, 자금조달, 신규사업, 투자유피, 신년도 사업계획 등 사업내용을 정리합니다. 또 사업 실패요인을 분석한 후 발생할 시행착오를 최소화함으로써 시간과 비용을 절약해드립니다."/>
        <custom-tab-input-group label="전문 분야" @child-input="onChangedIntro" @input="inputText(item.id, 'category_intro')" :text="item.category_intro" desc="ex) 소셜벤처 / 소상공인 / 프렌차이즈 / 기술 창업 등 (서술형)"/>
        <custom-tab-input-group label="한줄 소개" @child-input="onChangedIntro" @input="inputText(item.id, 'short')" :text="item.short_description" desc="ex) 안녕하세요. 창업 전문 글작성가 김다른입니다. (서술형)"/>
        <custom-tab-input-group label="상세 설명" @child-input="onChangedIntro" @input="inputText(item.id, 'description')" :text="item.description" desc="ex) 예비창업패키지 전문 멘토 및 심사위원으로 창업의 전반적인 컨설팅 및 업무가 가능합니다. (서술형)"/>
      </div>
    </div>
  </div>

  <custom-file-input-group label="포트폴리오" :essential="true" type="portfolio" @file-add-modal-button-click="fileAddModalButtonClick"/>
  <Teleport to="body">
    <portfolio-select :show="showPortfolioModal" @close="showPortfolioModal = false" />
  </Teleport>

  <div class="identity-verification-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>본인인증</label>
        <p>필수</p>
      </div>
    </div>
    <div class="identity-verification-button-wrapper">
      <button class="identity-verification-btn" type="button" @click="showVerificationModal = true">인증하기</button>
    </div>
  </div>
  <Teleport to="body">
    <identity-verification :show="showVerificationModal" @close="showVerificationModal = false" />
  </Teleport>

  <div class="area-select-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>지역</label>
      </div>
    </div>
    <div class="area-select-field">
      <data-selector :list-data="cityData" @updateSelectedData="getSelectCity" :parent-value="selectedCityData"/>
      <data-selector :list-data="cityData2" @updateSelectedData="getSelectCity2" :parent-value="selectedCityData2"/>
    </div>
  </div>

  <div class="contact-time-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>연락 가능 시간</label>
      </div>
    </div>
    <div class="contact-time-select-wrapper">
      <select v-model="communicate_start_time" :value="communicate_start_time">
        <option value="">시간선택</option>
        <option value="00:00:00">오전 12시</option>
        <option value="01:00:00">오전 1시</option>
        <option value="02:00:00">오전 2시</option>
        <option value="03:00:00">오전 3시</option>
        <option value="04:00:00">오전 4시</option>
        <option value="05:00:00">오전 5시</option>
        <option value="06:00:00">오전 6시</option>
        <option value="07:00:00">오전 7시</option>
        <option value="08:00:00">오전 8시</option>
        <option value="09:00:00">오전 9시</option>
        <option value="10:00:00">오전 10시</option>
        <option value="11:00:00">오전 11시</option>
        <option value="12:00:00">오후 12시</option>
        <option value="13:00:00">오후 1시</option>
        <option value="14:00:00">오후 2시</option>
        <option value="15:00:00">오후 3시</option>
        <option value="16:00:00">오후 4시</option>
        <option value="17:00:00">오후 5시</option>
        <option value="18:00:00">오후 6시</option>
        <option value="19:00:00">오후 7시</option>
        <option value="20:00:00">오후 8시</option>
        <option value="21:00:00">오후 9시</option>
        <option value="22:00:00">오후 10시</option>
        <option value="23:00:00">오후 11시</option>
      </select>
      <div class="contact-time-picker-division-wrapper">
        <span class="contact-time-picker-division">~</span>
      </div>

      <select v-model="communicate_end_time">
        <option value="">시간선택</option>
        <option value="00:00:00">오전 12시</option>
        <option value="01:00:00">오전 1시</option>
        <option value="02:00:00">오전 2시</option>
        <option value="03:00:00">오전 3시</option>
        <option value="04:00:00">오전 4시</option>
        <option value="05:00:00">오전 5시</option>
        <option value="06:00:00">오전 6시</option>
        <option value="07:00:00">오전 7시</option>
        <option value="08:00:00">오전 8시</option>
        <option value="09:00:00">오전 9시</option>
        <option value="10:00:00">오전 10시</option>
        <option value="11:00:00">오전 11시</option>
        <option value="12:00:00">오후 12시</option>
        <option value="13:00:00">오후 1시</option>
        <option value="14:00:00">오후 2시</option>
        <option value="15:00:00">오후 3시</option>
        <option value="16:00:00">오후 4시</option>
        <option value="17:00:00">오후 5시</option>
        <option value="18:00:00">오후 6시</option>
        <option value="19:00:00">오후 7시</option>
        <option value="20:00:00">오후 8시</option>
        <option value="21:00:00">오후 9시</option>
        <option value="22:00:00">오후 10시</option>
        <option value="23:00:00">오후 11시</option>
      </select>
    </div>
  </div>

  <div class="payment-method-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>결제 수단</label>
        <img src="/assets/icons/info_icon.png" />
        <span>둘 다 선택 가능합니다</span>
      </div>
    </div>
    <div class="payment-method-select-wrapper">
      <check-box-button text="카드결제" :class="{'active': cardButtonState === true}" @click="paymentButtonClick('card')"/>
      <check-box-button text="계좌이체" :class="{'active': accountButtonState === true}" @click="paymentButtonClick('account')"/>
    </div>
  </div>

  <profile-input-file-group label="자격증 및 기타서류" type="cert" @file-input-group-listener="fileInputGroupListener" :parent-files="certificateFiles"/>
  <Teleport to="body">
    <certificate-document :show="showCertificateDocumentModal" @close="showCertificateDocumentModal = false"/>
  </Teleport>

  <custom-file-input-group label="경력 사항" :essential="false" type="career" @file-add-modal-button-click="fileAddModalButtonClick"/>
  <div class="career-list-wrapper" v-if="careerList !== ''">
    <div class="career-item" v-for="(item, index) in careerList">
      <table>
        <tr>
          <th>회사명</th>
          <td>{{item.company_nm}}</td>
        </tr>
        <tr>
          <th>직위 / 직책</th>
          <td>{{item.position}}</td>
        </tr>
        <tr>
          <th>입사일</th>
          <td>{{ yearMonth(item.start_year) }}</td>
        </tr>
        <tr>
          <th>퇴사일</th>
          <td v-if="item.is_attending === false">{{yearMonth(item.end_year)}}</td>
          <td v-if="item.is_attending === true">재직중</td>
        </tr>
        <tr>
          <th>상세설명</th>
          <td>{{item.description}}</td>
        </tr>
      </table>
    </div>
  </div>
  <Teleport to="body">
    <career-create :show="showCareerModal" @close="showCareerModal = false"/>
  </Teleport>

  <custom-file-input-group label="학력 사항" :essential="false" type="education" @file-add-modal-button-click="fileAddModalButtonClick"/>
  <Teleport to="body">
    <education-create :show="showEducationModal" @close="showEducationModal = false"/>
  </Teleport>

  <profile-pic-video-file-group label="사진 및 동영상" type="pic" @file-input-group-listener="fileInputGroupListener" :parent-files="picVideoList"/>
  <Teleport to="body">
    <profile-picture-video :show="showPictureVideoModal" @close="showPictureVideoModal = false"/>
  </Teleport>

  <Teleport to="body">
    <request-complete :show="showSaveCompleteModal" @close="avatarModalClose" msg="저장되었습니다!"/>
  </Teleport>

  <div class="link-input-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>링크</label>
      </div>
    </div>
    <div class="link-input-item">
      <label>홈페이지</label>
      <input type="text" placeholder="대표 홈페이지 URL" v-model="homepage">
    </div>

    <div class="link-input-item">
      <label>SNS</label>
      <input type="text" placeholder="대표 SNS URL" v-model="sns">
    </div>
  </div>

  <div class="save-button-wrapper">
    <div class="save-button-field">
      <button class="save-button" type="button" @click="submit">저장하기</button>
      <button class="cancel-button" type="button">취소</button>
    </div>
  </div>
</div>
</template>

<script>
import InputGroup from "@/components/molecules/InputGroup.vue";
import CategorySelect from "@/components/modal/CategorySelect.vue";
import CompanyInfoCreate from "@/components/modal/CompanyInfoCreate.vue";
import TabItem from "@/components/atoms/TabItem.vue";
import TextareaGroup from "@/components/molecules/textareaGroup.vue";
import CustomInput from "@/components/atoms/CustomInput.vue";
import CustomTabInputGroup from "@/components/atoms/CustomTabInputGroup.vue";
import CustomFileInputGroup from "@/components/atoms/CustomFileInputGroup.vue";
import {computed, ref} from "vue";
import CheckBoxButton from "@/components/atoms/CheckBoxButton.vue";
import ProfileInputFileGroup from "@/components/atoms/ProfileInputFileGroup.vue";
import PortfolioSelect from "@/components/modal/PortfolioSelect.vue";
import IdentityVerification from "@/components/modal/IdentityVerification.vue";
import CertificateDocument from "@/components/modal/CertificateDocument.vue";
import CareerCreate from "@/components/modal/CareerCreate.vue";
import EducationCreate from "@/components/modal/EducationCreate.vue";
import ProfileImgChange from "@/components/modal/ProfileImgChange.vue";
import ProfilePictureVideo from "@/components/modal/ProfilePictureVideo.vue";
import RequestComplete from "@/components/modal/RequestComplete.vue";
import DataSelector from "@/components/atoms/DataSelector.vue";
import {useStore} from "vuex";
import ProfilePicVideoFileGroup from "@/components/atoms/ProfilePicVideoFileGroup.vue";

export default {
  name: "Profile",
  components: {
    ProfilePicVideoFileGroup,
    DataSelector,
    CertificateDocument,
    IdentityVerification,
    PortfolioSelect,
    ProfileInputFileGroup,
    CheckBoxButton,
    CustomInput, TextareaGroup, TabItem,
    CompanyInfoCreate, CategorySelect, InputGroup,
    CustomTabInputGroup, CustomFileInputGroup,
    RequestComplete,
    ProfilePictureVideo,
    ProfileImgChange,
    CareerCreate, EducationCreate,
  },
  data() {
    return {
      businessYn: false,
      showCategoryModal: false,
      showCompanyModal: false,
      showPortfolioModal: false,
      showVerificationModal: false,
      showCertificateDocumentModal: false,
      showCareerModal: false,
      showEducationModal: false,
      showPictureVideoModal: false,
      showSaveCompleteModal: false,
      showProfileImgChangeModal: false,
      currentTab: 0,
      categoryList: [],
      cardButtonState: true,
      accountButtonState: false,
      cityData: Array,
      cityData2: Array,
      selectedCityData: '',
      selectedCityData2: '',
      serviceIntroContent: [],
      childText: '',
      communicate_start_time: '',
      communicate_end_time: '',
      // certificate: false,
      company_name: '',
      careerList: [],
      picVideoList: Object,
      certificateFiles: [],
      avatar: '',
      homepage: '',
      sns: ''
    }
  },
  created() {
    this.$store.dispatch("getCareerList")
    this.$store.dispatch('getAvatar')
  },
  setup() {
    // const {dispatch} = useStore()
    // dispatch('getCareerList')
    // dispatch('getAvatar')
  },
  computed: {
    current() {
      return this.categoryList.find(el => el.id === this.currentId) || {}
    },
    categoryGet() {
      this.serviceIntroContent = this.$store.getters.getCategoryFormList
      return this.$store.getters.getCategoryFormList
    },
    changedProfile() {
      return this.$store.getters.getProfileData
    },
    careerGet() {
      this.careerList = this.$store.getters.getCareerList
      return this.$store.getters.getCareerList
    },
    avatarInit() {
      return this.$store.getters.getAvatar
    },
    yearMonth() {
      return (value) => {
        // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
        if(value === '') return '';

        // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
        var js_date = new Date(value);

        // 연도, 월, 일 추출
        var year = js_date.getFullYear();
        var month = js_date.getMonth() + 1;

        // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
        if(month < 10){
          month = '0' + month;
        }
        // 최종 포맷 (ex - '2021-10')
        return year + '-' + month;
      }
    }
  },
  watch: {
    selectedCityData(id) {
      this.getCityData2(id)
    },
    categoryGet(value) {
      this.categoryList = value
    },
    changedProfile(val) {
      this.communicate_start_time = val.com_start_time
      this.communicate_end_time = val.com_end_time
      this.cardButtonState = val.pay_card
      this.accountButtonState = val.pay_bank
    },
    careerGet(val) {
      this.careerList = val
    },
    avatarInit(val) {
      this.avatar = val
    }
  },
  methods: {
    submit() {
      const formData = new FormData()
      formData.append('start_time', this.communicate_start_time)
      formData.append('end_time', this.communicate_end_time)
      formData.append('category', JSON.stringify(this.serviceIntroContent))
      formData.append('city', this.selectedCityData2)
      formData.append('homepage', this.homepage)
      formData.append('sns', this.sns)
      formData.append('pay_card', this.cardButtonState)
      formData.append('pay_bank', this.accountButtonState)
      formData.append('certificate', this.businessYn)
      this.axios.post('/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.showSaveCompleteModal = true
        }
      }).catch(error => {

      })
    },
    avatarModalClose() {
      this.avatar = this.$store.getters.getAvatar
      this.showSaveCompleteModal = false
    },
    onChangedIntro(newData) {
      // console.log(newData)
      this.childText = newData
    },
    onChangedCompanyName(newData){
      this.company_name = newData
    },
    inputText(id, type) {
      const chk = this.serviceIntroContent.findIndex(v => v.id === id)
      console.log('====')
      this.serviceIntroContent.find((item, index) => {
        if(chk !== -1) {
          switch (type) {
            case 'intro':
              this.serviceIntroContent[chk].intro = this.childText
              break
            case 'category_intro':
              this.serviceIntroContent[chk].category_intro = this.childText
              break
            case 'short':
              this.serviceIntroContent[chk].short_description = this.childText
              break
            case 'description':
              this.serviceIntroContent[chk].description = this.childText
              break
          }
        }
      })
      console.log(this.childText)
    },
    getMyCategory() {
      this.$store.dispatch('getCategoryFormList')
      // console.log('dd')
      this.categoryList = this.$store.getters.getCategoryFormList
    },
    companyCreate(bol) {
      this.businessYn = bol
      if(this.businessYn === true) {
        this.showCompanyModal = true
      }
    },
    paymentButtonClick(type) {
      if (type === 'card') {
        this.cardButtonState = !this.cardButtonState
      } else if (type === 'account') {
        this.accountButtonState = !this.accountButtonState
      }
    },
    fileAddModalButtonClick(type) {
      console.log(type)
      if (type === 'portfolio') {
        this.showPortfolioModal = true;
      } else if (type === 'career') {
        // 경력
        this.showCareerModal = true;
      } else if (type === 'education') {
        // 학력
        this.showEducationModal = true;
      } else {
        console.log('else');
      }
    },
    fileInputGroupListener(type) {
      console.log(type);
      if (type === 'cert') {
        // 자격증
        this.showCertificateDocumentModal = true;
      } else if (type === 'pic') {
        this.showPictureVideoModal = true;
      } else {
        console.log('else');
      }
    },
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
      this.selectedCityData = id
    },
    getSelectCity2(id) {
      this.selectedCityData2 = id
      // console.log(this.selectedCityData2)
    },
    getAvatar() {
      this.avatar = this.$store.getters.getAvatar
    },
    getProfile() {
      this.axios.get('/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          const profile = res.data.data
          const underCity = res.data.city_info
          console.log(profile)
          this.axios.get('/city').then(res => {
            this.cityData = res.data.data
            this.selectedCityData = underCity.upper_id
            // console.log(this.selectedCityData)
            this.axios.get('/city/'+this.selectedCityData).then(res => {
              this.cityData2 = res.data.data
              this.selectedCityData2 = profile.city
            })
          })
          this.businessYn = profile.certificate
          this.communicate_start_time = profile.start_communicate_time
          this.communicate_end_time = profile.end_communicate_time
          this.cardButtonState = profile.pay_card
          this.accountButtonState = profile.pay_bank
          this.homepage = profile.homepage
          this.sns = profile.sns
        }
      })
    },
    getProfileCertificate() {
      this.axios.get('certificate', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.certificateFiles = res.data.data
        }
      }).catch(e => {

      })
    },
    getPicVideos() {
      this.axios.get('pic_video', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          console.log(res.data.data)
          this.picVideoList = res.data.data
        }
      }).catch(e => {

      })
    }
  },
  mounted() {
    this.getCityData()
    this.getMyCategory()
    this.getAvatar()
    this.getProfileCertificate()
    this.getPicVideos()
    this.getProfile()
  }
}
</script>

<style lang="scss">
#app {
  background: white;
}
.profile-container {
  width: 760px;
  margin: 0 auto;
  padding-top: 50px;
  .profile-title {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
  }
  .profile-wrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .profile-img-wrapper {
      position: relative;
      .profile-img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      .profile-edit-btn {
        box-shadow: 0 4px 0 0 rgba(207, 215, 226, 0.64);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: white;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 0;
        img {
          width: 18px;
        }
      }
    }
  }
  .business-yn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    .business-btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-left: 10px;
      .check-btn {
        width: 100px;
        height: 40px;
        background: white;
        border-radius: 10px;
        border: 1px solid #000000;
        cursor: pointer;
        &:first-child {
          margin-right: 10px;
        }
        &.active {
          color: #FF0099;
          border: 1px solid #FF0099;
          font-weight: bold;
        }
      }
    }
  }

  .name-select-wrapper {
    margin-top: 50px;
  }

  .category-select-wrapper {
    margin-top: 50px;
    .title-wrapper {
      display: flex;
      margin-bottom: 10px;
      .category-add-btn {
        width: 120px;
        height: 32px;
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
    }
    .category-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .category-select-tab {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .category-tab {
          width: 100%;
          height: 45px;
          background: #EEEEEE;
          color: black;
          font-weight: bold;
          font-size: 18px;
          border-top: 1px solid #EEEEEE;
          border-right: 1px solid #EEEEEE;
          border-left: 1px solid #EEEEEE;
          border-bottom: 0;
          border-radius: 10px 10px 0 0;
          &.active {
            background: #FFFFFF;
            border-top: 1px solid #EEEEEE;
            border-right: 1px solid #EEEEEE;
            border-left: 1px solid #EEEEEE;
          }
        }
      }
      .tab-contents {
        display: none;
        border-top: 0;
        border-bottom: 1px solid #EEEEEE;
        border-left: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
        border-radius: 0 0 10px 10px;
        box-shadow: 0px 12px 24px rgba(207, 215, 226, 0.54);
        &.active {
          display: block;
        }
      }
      .category-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
      }
      .category-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid #6C6C6C;
        height: 32px;
        border-radius: 8px;
        padding: 6px 8px 6px 12px;
        box-sizing: border-box;
        cursor: pointer;
        span {
          font-size: 14px;
        }
        .remove-btn {
          background: transparent;
          border: none;
          margin-left: 8px;
          cursor: pointer;
          img {
            width: 12px;
          }
        }
      }
    }
  }
  .identity-verification-wrapper {
    margin-top: 50px;
    .identity-verification-button-wrapper {
      margin-top: 10px;
      .identity-verification-btn {
        width: 100px;
        height: 32px;
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
    }
  }

  .area-select-wrapper {
    margin-top: 50px;
    .area-select-field {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      select {
        margin: 0 20px 0 0;
        width: 110px;
        height: 32px;
        border: 1px solid #EEEEEE;
        border-radius: 5px;
        text-align: center;
      }
    }
  }

  .contact-time-wrapper {
    margin-top: 50px;
    .contact-time-select-wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      select {
        margin: 0 20px 0 0;
        width: 110px;
        height: 32px;
        border: 1px solid #EEEEEE;
        border-radius: 5px;
        text-align: center;
      }
      .contact-time-picker-division-wrapper {
        display: flex;
        .contact-time-picker-division {
          margin: auto;
          text-align: center;
        }
      }
    }
  }

  .payment-method-wrapper {
    margin-top: 50px;
    .payment-method-select-wrapper {
      margin-top: 10px;
      .check-btn {
        margin-right: 10px;
      }
    }
  }

  .career-list-wrapper {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      .career-item {
        margin-bottom: 10px;
      }
    }
    .career-item {
      border: 1px solid #EEEEEE;
      padding: 30px 45px;
      box-sizing: border-box;
      table {
        width: 100%;
        table-layout: fixed;
        tr {
          th {
            height: 40px;
            font-size: 14px;
            color: #424242;
            width: 100px;
            text-align: left;
          }
          td {
            overflow-wrap: break-word;
            color: #424242;
            font-size: 14px;
          }
        }
      }
    }
  }

  .document-input-wrapper {
    margin-top: 50px;
  }

  .img-video-input-wrapper {
    margin-top: 50px;
  }

  .link-input-wrapper {
    margin-top: 50px;
    .link-input-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 1px solid #EEEEEE;
      padding: 10px;
      margin-bottom: 20px;
      label {
        flex: 1;
        font-size: 14px;
        color: #424242;
      }
      input {
        flex: 5;
        border: none;
        font-size: 14px;
      }
    }
  }

  .save-button-wrapper {
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    .save-button-field {
      margin: auto;
      .save-button {
        background: #FF0099;
        color: #FFFFFF;
        border: none;
        width: 159px;
        height: 48px;
        border-radius: 10px;
        margin: 5px;
        cursor: pointer;
      }
      .cancel-button {
        background: transparent;
        border: 1px solid #616161;
        border-radius: 10px;
        width: 159px;
        height: 48px;
        margin: 5px;
        cursor: pointer;
      }
    }
  }
}
.title-label-wrapper {
  display: flex;
  margin: auto 0;
  label {
    font-weight: bold;
    margin: auto 0 0 5px;
    color: #2C2C2C;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: #FF4040;
    margin: auto 10px 0 5px;
  }
  img {
    width: 15px;
    height: 15px;
    margin: auto 5px 0 5px;
  }
  span {
    font-size: 12px;
    margin: auto auto 0 0;
  }
}
</style>
