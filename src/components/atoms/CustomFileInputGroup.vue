<template>
  <div class="portfolio-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>{{label}}</label>
        <p v-show="essential">필수</p>
      </div>
    </div>
    <div class="portfolio-add-field">
      <button class="portfolio-add-btn">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.335 10.627H10.085V15.877H8.58496V10.627H3.33496V9.12695H8.58496V3.87695H10.085V9.12695H15.335V10.627Z" fill="#FF0099"/>
        </svg>
        {{label}} 추가
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomFileInputGroup",
  props: {
    label: String,
    essential: Boolean
  }
}
</script>

<style lang="scss">
.portfolio-wrapper {
  margin-top: 50px;
  .portfolio-add-field {
    display: flex;
    flex-direction: row;
    border: 1px solid #EEEEEE;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    .portfolio-add-btn {
      width: 149px;
      height: 32px;
      background: transparent;
      border: 1px solid #FF0099;
      color: #FF0099;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      svg {
        margin-right: 8px;
      }
    }
  }
}
</style>