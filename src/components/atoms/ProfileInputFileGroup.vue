<template>
  <div class="document-input-wrapper">
    <div class="title-wrapper">
      <div class="title-label-wrapper">
        <label>{{label}}</label>
      </div>
    </div>
    <div class="document-input-file-field">
      <div class="document-input-file-add">
        <img src="/assets/icons/plus_icon.png">
      </div>
      <div class="document-input-file-empty">
        <img src="/assets/icons/default_upload_img.png">
      </div>
      <div class="document-input-file-empty">
        <img src="/assets/icons/default_upload_img.png">
      </div>
      <div class="document-input-file-empty">
        <img src="/assets/icons/default_upload_img.png">
      </div>
      <div class="document-input-file-empty">
        <img src="/assets/icons/default_upload_img.png">
      </div>
      <div class="document-input-file-empty">
        <img src="/assets/icons/default_upload_img.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInputFileGroup",
  props: {
    label: String
  }
}
</script>

<style lang="scss">
.document-input-wrapper {
  margin-top: 50px;
  .document-input-file-field {
    display: flex;
    flex-direction: row;
    .document-input-file-add {
      width: 115px;
      height: 115px;
      margin: 10px;
      background: #FFFFFF;
      border-radius: 10px;
      border: 1px solid #FF0099;
      color: #FF0099;
      font-size: 60px;
      display: flex;
      img {
        margin: auto;
        width: 39px;
        height: 39px;
      }
    }
    .document-input-file-empty {
      width: 115px;
      height: 115px;
      margin: 10px;
      border-radius: 10px;
      border: 0;
      background: #F9F9F9;
      display: flex;
      img {
        margin: auto;
        width: 48px;
        height: 48px;
      }
    }
  }
}
.title-label-wrapper {
  display: flex;
  margin: auto 0;
  label {
    font-weight: bold;
    margin: auto 0 0 5px;
    color: #2C2C2C;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: #FF4040;
    margin: auto 10px 0 5px;
  }
  img {
    width: 15px;
    height: 15px;
    margin: auto 5px 0 5px;
  }
  span {
    font-size: 12px;
    margin: auto auto 0 0;
  }
}
</style>