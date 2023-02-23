<template>
  <div class="information-container">
    <div class="information-item-wrapper" v-for="item in infoData">
      <div class="item-icon-background">
        <img :src="item.icon">
      </div>
      <div class="item-title">
        <p><b>{{item.title}}</b></p>
      </div>
      <div class="item-content">
        <p v-html="item.desc"></p>
      </div>
    </div>
  </div>

  <div class="information-link-container">
    <div class="information-link-item-wrapper">
      <p><b>소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게 보호해드려요! 소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게 보호해드려요!</b></p>
      <a class="information-link-item-button">
        <span>전문가에게 의뢰하기</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeInformationSide",
  data() {
    return {
      infoData: [
        {
          title: "소중한 내 돈",
          desc: "소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게<br>보호해드려요!",
          icon: "/assets/icons/icon_doc.png"
        },
        {
          title: "소중한 내 돈",
          desc: "소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게<br>보호해드려요!",
          icon: "/assets/icons/icon_doc.png"
        },
        {
          title: "소중한 내 돈",
          desc: "소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게<br>보호해드려요!",
          icon: "/assets/icons/icon_doc.png"
        },
        {
          title: "소중한 내 돈",
          desc: "소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게<br>보호해드려요!",
          icon: "/assets/icons/icon_doc.png"
        },
        {
          title: "소중한 내 돈",
          desc: "소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게<br>보호해드려요!",
          icon: "/assets/icons/icon_doc.png"
        },
        {
          title: "소중한 내 돈",
          desc: "소중한 내 돈, 걱정되지 않나요<br>에스크로 결제 시스템으로 안전하게<br>보호해드려요!",
          icon: "/assets/icons/icon_doc.png"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.information-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .information-item-wrapper {
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    .item-icon-background {
      display: flex;
      justify-content: center;
      width: 100px;
      height: 100px;
      margin: auto;
      border-radius: 50%;
      background: #FFEBF7;
      img {
        width: 60px;
        height: 60px;
        align-self: center;
      }
    }
    .item-title {
      margin: auto;
      p {
        font-size: 20px;
        margin-bottom: 4px;
        text-align: center;
      }
    }
    .item-content {
      margin: auto;
      p {
        font-size: 15px;
        margin-top: 0;
        color: #737B7D;
        text-align: center;
      }
    }
  }
}
.information-link-container {
  background: #EEEEEE;
  width: 100%;
  height: 289px;
  display: flex;
  .information-link-item-wrapper {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 18px;
      color: #4B4B4B;
      text-align: center;
    }
    .information-link-item-button {
      background: #FF0099;
      border-radius: 10px;
      width: 30%;
      padding: 10px;
      margin: auto;
      text-align: center;
      cursor: pointer;
      span {
        font-size: 18px;
        color: #FFFFFF;
      }
    }
  }
}
</style>