<template>
  <div class="container">
    <div class="estimate-request-container">
      <div class="step-menu-wrapper">
        <h1>프로젝트 의뢰서 작성</h1>
        <ul class="step-menu">
          <li class="active">1. 세부카테고리</li>
          <li>2. 프로젝트 일정 및 견적요청 마감시간</li>
          <li>3. 지역 및 진행방식</li>
          <li>4. 의뢰내용</li>
          <li>5. 참고내용</li>
          <li>6. 의뢰내용 요청 및 확인</li>
          <li>프로젝트 등록 완료</li>
        </ul>
      </div>
      <div class="content-wrapper">
        <div class="content-backdrop">
          test
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EstimateRequest"
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
  align-items: center;
  padding-top: 40px;
  box-sizing: border-box;
  //background: #eeeeee;
  .step-menu-wrapper {
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
    .content-backdrop {
      width: 760px;
      border-radius: 20px;
      background: white;
      box-shadow: 0px 12px 24px 0px rgba(207, 215, 226, 0.54);
      padding: 30px 60px;
      box-sizing: border-box;
    }
  }
}
</style>