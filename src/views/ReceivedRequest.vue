<template>
  <div class="received-request-container">
    <div class="title-wrapper">
      <h1>받은 의뢰</h1>
      <ul class="request-tab">
        <li>전체(00)</li>
        <li>지정의뢰(00)</li>
        <li>관심의뢰(00)</li>
      </ul>
    </div>
    <div class="request-list-container">
      <div class="request-card-wrapper">
        <request-card-item v-for="item in requestData" :state="item.state" :name="item.name" :title="item.title" :contents="item.contents" :date="item.date" :end-time="item.endTime" />
      </div>
    </div>
    <div class="more-btn-wrapper">
      <button class="button natural mid">더보기</button>
    </div>
  </div>
</template>

<script>
import RequestCardItem from "@/components/RequestCardItem.vue";

export default {
  name: "ReceivedRequest",
  components: {RequestCardItem},
  data() {
    return {
      requestData: [
        {
          state: '의뢰도착',
          name: '김다른',
          title: '사업계획서 작성',
          contents: '현재 온라인 거래를 이용한 플랫폼을 구상하고 있습니다. 만나서 사업계획서를 구상부터 기획까지 회의를 통해 작성하길 원합니다.',
          date: '2023-03-02',
          endTime: 2
        },
        {
          state: '의뢰진행중',
          name: '김진한',
          title: '사업계획서 작성',
          contents: '현재 온라인 거래를 이용한 플랫폼을 구상하고 있습니다. 만나서 사업계획서를 구상부터 기획까지 회의를 통해 작성하길 원합니다.',
          date: '2023-03-02',
          endTime: 2
        },
        {
          state: '답변완료',
          name: '오정연',
          title: '사업계획서 작성',
          contents: '현재 온라인 거래를 이용한 플랫폼을 구상하고 있습니다. 만나서 사업계획서를 구상부터 기획까지 회의를 통해 작성하길 원합니다.',
          date: '2023-03-02',
          endTime: 2
        }
      ]
    }
  },
  methods: {
    getLists() {

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
.received-request-container {
  margin-top: 40px;
  .title-wrapper {
    width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    h1 {
      margin: 0;
      font-size: 32px;
      font-weight: bold;
      line-height: normal;
      margin-right: 10px;
    }
    .request-tab {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      margin: 0;
      li {
        color: #585858;
        font-weight: bold;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
  }
  .request-list-container {
    background: #F9F9F9;
    padding: 20px 0;
    box-sizing: border-box;
    margin-top: 20px;
    .request-card-wrapper {
      width: 760px;
      margin: 0 auto;
      .request-card-item {
        &:not(:first-child) {
          margin-top: 20px;
        }
      }
    }
  }
  .more-btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .button {
      width: 160px;
    }
  }
}
</style>