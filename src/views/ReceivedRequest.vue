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
        <request-card-item />
      </div>
    </div>
  </div>
</template>

<script>
import RequestCardItem from "@/components/RequestCardItem.vue";

export default {
  name: "ReceivedRequest",
  components: {RequestCardItem}
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
      margin: 0 20px 0 0;
      font-size: 32px;
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
    .request-card-wrapper {
      width: 760px;
      margin: 0 auto;
    }
  }
}
</style>