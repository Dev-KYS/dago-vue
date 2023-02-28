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
    <div class="request-list-wrapper">
      <div class="request-item">
        <div class="title-wrapper">
          <p class="title">사업계획서 작성</p>
          <span class="badge">의뢰 진행중</span>
          <span class="end-date">3시간 후 견적 마감</span>
        </div>
        <div class="return-pro-list">
          <div class="profile-img-wrapper">
            <img class="profile-img" style="left: 0px" src="https://dummyimage.com/65x65/000/fff" />
            <img class="profile-img" style="left: 20px" src="https://dummyimage.com/65x65/cf59cf/cf59cf" />
            <img class="profile-img" style="left: 40px" src="https://dummyimage.com/65x65/597dcf/597dcf" />
          </div>
          <p>3명의 전문가가 응답했습니다</p>
        </div>
        <div class="detail-btn-wrapper">
          <button class="button natural mid">자세히보기</button>
        </div>
      </div>

      <div class="request-item">
        <div class="title-wrapper">
          <p class="title">사업계획서 작성</p>
          <span class="badge">의뢰 진행중</span>
          <span class="end-date">3시간 후 견적 마감</span>
        </div>
        <div class="return-pro-list">
          <div class="profile-img-wrapper">
            <img class="profile-img" style="left: 0px" src="https://dummyimage.com/65x65/000/fff" />
            <img class="profile-img" style="left: 20px" src="https://dummyimage.com/65x65/cf59cf/cf59cf" />
            <img class="profile-img" style="left: 40px" src="https://dummyimage.com/65x65/597dcf/597dcf" />
          </div>
          <p>3명의 전문가가 응답했습니다</p>
        </div>
        <div class="detail-btn-wrapper">
          <button class="button natural mid">자세히보기</button>
        </div>
      </div>
    </div>
  </div>
  <div class="more-btn-wrapper">
    <button class="button natural mid">더보기</button>
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
    .request-list-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .request-item {
        width: 760px;
        height: 170px;
        background: white;
        box-shadow: 0px 12px 24px rgba(207, 215, 226, 0.54);
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 30px;
        box-sizing: border-box;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        .title-wrapper {
          width: 140px;
          height: 100%;
          border-right: 1px solid #D9D9D9;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          .title {
            color: #181818;
            font-size: 16px;
            font-weight: bold;
            margin: 0;
          }
          .badge {
            margin-top: 10px;
            background: #FFEBF7;
            color: #E253A9;
            border-radius: 5px;
            font-size: 12px;
            padding: 1px 3px;
            box-sizing: border-box;
            font-weight: bold;
          }
          .end-date {
            color: #424242;
            font-size: 12px;
            margin-top: 27px;
          }
        }
        .return-pro-list {
          display: flex;
          width: 400px;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          & > p {
            color: #424242;
            margin: 0;
            font-size: 14px;
          }
          .profile-img-wrapper {
            width: 120px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .profile-img {
              border-radius: 50%;
              position: absolute;

            }
          }
        }
        .detail-btn-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
          .button {
            width: 110px;
            height: 32px;
            font-size: 14px;
            border-radius: 12px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>