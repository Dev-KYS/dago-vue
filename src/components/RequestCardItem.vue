<template>
<div class="request-card-item">
  <div class="profile-wrapper">
    <img class="profile-img" src="" />
    <p class="name">김다른 고객님</p>
    <span class="label request-send">의뢰도착</span>
  </div>
  <div class="contents-wrapper">
    <div>
      <p class="title">사업계획서 작성</p>
      <p class="contents">현재 온라인 거래를 이용한 플랫폼을 구상하고 있습니다. 만나서 사업계획서를 구상부터 기획까지 회의를 통해 작성하길 원합니다.</p>
    </div>
    <div class="date-wrapper">
      <span>2023년 2월 3일까지</span><span>6시간 후 견적 마감</span>
    </div>
  </div>
  <div class="button-wrapper">
    <button class="like-btn" @click="isActive = !isActive">
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z" fill="{{isActive ? '#FF0099' : 'white'}}" stroke="#FF0099"/>
      </svg>
    </button>
    <button class="button natural small">상세보기</button>
  </div>
</div>
</template>

<script>
export default {
  name: "RequestCardItem",
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss">
.request-card-item {
  width: 760px;
  height: 170px;
  border-radius: 20px;
  box-shadow: 0px 12px 24px 0 rgba(207, 215, 226, 0.54);
  box-sizing: border-box;
  padding: 12.53px 20px;
  background: white;
  display: flex;
  flex-direction: row;
  .profile-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 153px;
    margin-right: 21px;
    border-right: 1px solid #D9D9D9;
    .profile-img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    .name {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
    }
    .label {
      margin-top: 2px;
      height: 20px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0 3px;
      &.request-send {
        background: #FFEBF7;
        color: #E253A9;
      }
    }
  }
  .contents-wrapper {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #181818;
      margin-top: 0;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .contents {
      margin: 0;
      font-size: 14px;
      color: #424242;
    }
    .date-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      span {
        &:first-child {
          padding-right: 10px;
          margin-right: 10px;
          border-right: 1px solid #D9D9D9;
        }
        font-size: 12px;
        color: #424242;
      }
    }
  }
  .button-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    .like-btn {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
}
</style>