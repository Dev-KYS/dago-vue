<template>
  <div class="footer-wrapper">
    <hr>
    <div class="footer-container">
      <div class="footer-cs-wrapper">
        <p class="footer-cs-phone-number">1544-0000</p>
        <p>10:30~18:00 (점심시간 13:00-14:00)</p>
        <p>주말, 공휴일 휴무</p>
      </div>
      <div class="footer-cs-site-map-wrapper">
        <div>
          <p>김대표 소개</p>
          <ul>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div>
          <p>고객 안내</p>
          <ul>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div>
          <p>전문가 안내</p>
          <ul>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div>
          <p>고객센터</p>
          <ul>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="solid-line">
    <div class="footer-container">
      <div class="footer-company-info-wrapper">
        <div class="footer-company-info-site-link-wrapper">
          <router-link to="">이용약관</router-link>
          <router-link to="">개인정보처리방침</router-link>
          <router-link to="">사업자 정보확인</router-link>
        </div>
        <div class="footer-company-info-site-content-wrapper">
          <p v-html="companyInfoData.content"></p>
          <p v-html="companyInfoData.copyRight"></p>
        </div>
      </div>
      <div class="footer-company-info-sns-wrapper">
        <div class="footer-company-info-sns-item-wrapper">
          <div class="footer-company-info-sns-item-icon-background">
            <img class="footer-company-info-sns-item-icon-facebook-icon" src="/assets/icons/facebook_icon.png">
          </div>
        </div>
        <div class="footer-company-info-sns-item-wrapper" v-for="item in snsIconData">
          <div class="footer-company-info-sns-item-icon-background">
            <img :src="item.icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      companyInfoData: {
        content: "(주)김대표 대전 유성구 복용남로 5-7, 2층<br>" +
            "대표 : 김진한 개인정보관리책임자 : 송준이 사업자등록번호 : 613-81-65278 사업자 정보확인통신판매업신고 : 2018-서울서초-2134 유료직업소개사업등록번호 : 제2021-3210195-14-5-00035호 고객센터 : 0000-0000",
        copyRight: "Copyright © 2023 DaruenKorea Inc. All rights reserved."
      },
      snsIconData: [
          { icon: "/assets/icons/insta_icon.png", link: "https://instagram.com" },
          { icon: "/assets/icons/insta_icon.png", link: "https://instagram.com" }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer-wrapper {
  width: 100%;
  .footer-container {
    width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    .footer-cs-wrapper {
      flex: 1;
      .footer-cs-phone-number {
        font-size: 20px;
        font-weight: bold;
      }
      .footer-cs-info {
        font-size: 16px;
      }
    }
    .footer-cs-site-map-wrapper {
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        p {
          font-weight: bold;
          font-size: 20px;
        }
        ul {
          list-style: none;
          padding-left:0;
          li {
            padding-bottom: 20px;
          }
        }
      }
    }
    .footer-company-info-wrapper {
      flex: 3;
      .footer-company-info-site-link-wrapper {
        margin: 20px 0 20px 0;
        display: flex;
        flex-direction: row;
        justify-content: start;
        .router-link-active {
          margin: 0 40px 0 0;
          color: #585858;
          font-weight: bold;
        }
      }
      .footer-company-info-site-content-wrapper {
        p {
          font-size: 14px;
          line-height: 21px;
          color: #7F7F7F;
        }
      }
    }
    .footer-company-info-sns-wrapper {
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 20px;
      .footer-company-info-sns-item-wrapper {
        .footer-company-info-sns-item-icon-background {
          display: flex;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin: auto;
          border-radius: 50%;
          background: #949494;
          .footer-company-info-sns-item-icon-facebook-icon {
            width: 19px;
            height: 36px;
            align-content: center;
          }
          img {
            width: 32px;
            height: 32px;
            align-self: center;
          }
        }
      }
    }
  }
}
hr {
  border: 1px solid #E3E3E3;
}
.router-link-active {
  text-decoration: none;
}
</style>