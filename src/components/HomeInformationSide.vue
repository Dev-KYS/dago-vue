<template>
  <div class="information-container">
    <div class="information-item-wrapper">
      <div class="item-icon-background">
        <img src="/assets/icons/icon_doc.png">
      </div>
      <div class="item-title">
        <p>소중한 내 돈</p>
      </div>
      <div class="item-content">
        <p>소중한 내 돈, 걱정되지 않나요 에스크로 결제 시스템으로 안전하게 보호해드려요!</p>
      </div>
    </div>

    <div class="information-item-wrapper">
      <p>2</p>
    </div>

    <div class="information-item-wrapper">
      <p>3</p>
    </div>

    <div class="information-item-wrapper">
      <p>4</p>
    </div>

    <div class="information-item-wrapper">
      <p>5</p>
    </div>

    <div class="information-item-wrapper">
      <p>6</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeInformationSide"
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
    margin: auto;
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
    }
    .item-content {

    }
  }
}
</style>