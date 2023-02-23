<template>
  <div class="footer-wrapper">
    <hr>
    <div class="footer-container">
      <div class="footer-cs-wrapper">
        <p><b>고객센터</b></p>
        <p>10:30~18:00 (점심시간 13:00-14:00)</p>
        <p>주말, 공휴일 휴무</p>
      </div>
      <div class="footer-cs-site-map-wrapper">
        <div>
          <h3>로고</h3>
          <ul>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div>
          <h3>로고</h3>
          <ul>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div>
          <h3>로고</h3>
          <ul>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div>
          <h3>로고</h3>
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
        content: "(주)다른코리아 대전광역시 유성구 복욕남로 5-7 2층 대표 : 김진한 개인정보관리책임자 : 송준이 사업자등록번호 : 613-81-65278 사업자 정보확인통신판매업신고 : 2018-서울서초-2134 유료직업소개사업등록번호 : 제2021-3210195-14-5-00035호 고객센터 : 1544-6254help@kmong.com<br>" +
            "(주)다른코리아는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.<br>" +
            "김대표 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI 등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다. [안내 보기]",
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
    .footer-cs-wrapper {
      flex: 1;
    }
    .footer-cs-site-map-wrapper {
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        ul {
          list-style: none;
          padding-left:0px;
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
          line-height: 200%;
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