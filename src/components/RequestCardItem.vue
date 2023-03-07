<template>
<div class="request-card-item">
  <div class="profile-wrapper">
    <img class="profile-img" src="" />
    <p class="name">{{ name }} 고객님</p>
    <span class="label request-send" :class="{'complete': state === '답변완료'}">{{state}}</span>
  </div>
  <div class="contents-wrapper">
    <div>
      <p class="title">{{ title }}</p>
      <p class="contents">{{ contents }}</p>
    </div>
    <div class="date-wrapper">
      <span>{{ dayjs(date).format('YYYY년 MM월 DD일') }}까지</span><span>{{ endTime }}시간 후 견적 마감</span>
    </div>
  </div>
  <div class="button-wrapper">
    <button class="like-btn" @click="isActive = !isActive">
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" :class="isActive ? 'active' : ''">
        <path d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z" fill="white" stroke="#FF0099"/>
      </svg>
    </button>
    <button class="button natural small" @click="$router.push('/question/create')" v-if="state === '의뢰도착'">상세보기</button>
    <button class="button natural small" @click="$router.push('/question/create')" v-else-if="state === '의뢰진행중'">상세보기</button>
    <button class="button natural small" @click="$router.push('/question/answer')" v-else-if="state === '답변완료'">답변보기</button>
  </div>
</div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "RequestCardItem",
  computed: {
    dayjs() {
      return dayjs
    }
  },
  props: {
    name: String,
    state: String,
    title: String,
    contents: String,
    date: Date,
    endTime: Number,
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {

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
        &.complete {
          color: #fff;
          background: #FF0099;
        }
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
      svg {
        &.active {
          path {
            fill: #FF0099;
          }
        }
      }
    }
  }
}
</style>