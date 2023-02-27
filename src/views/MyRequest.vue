<template>
<div class="my-request-container">
  <div class="title-wrapper">
    <h1>요청목록</h1>
    <ul class="request-tab">
      <li>전체(00)</li>
      <li>의뢰진행중(00)</li>
      <li>견적마감(00)</li>
    </ul>
  </div>
  <div class="request-list-container">

  </div>
</div>
</template>

<script>
export default {
  name: "MyRequest"
}
</script>

<style lang="scss">
.my-request-container {
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
  }
}
</style>