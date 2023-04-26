<template>
<div class="my-request-container">
  <div class="title-wrapper">
    <h1>요청목록</h1>
    <ul class="request-tab">
      <li>전체({{ totalCount }})</li>
      <li>의뢰진행중({{ processCount }})</li>
      <li>견적마감({{ endedCount }})</li>
    </ul>
  </div>
  <div class="request-list-container">
    <div class="request-list-wrapper">
      <div class="request-item" v-for="item in requests.data">
        <div class="title-wrapper">
          <p class="title">{{item.has_category.title}}</p>
          <span class="badge">{{item.has_status.title}}</span>
          <span class="end-date">3시간 후 견적 마감</span>
        </div>
        <div class="return-pro-list">
          <div class="profile-img-wrapper">
            <img class="profile-img" style="left: 0px" src="https://dummyimage.com/65x65/000/fff" v-for="question in item.has_question"/>
            <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="item.has_question.length === 0">
              <path d="M40.6455 0.986328C18.5655 0.986328 0.645508 18.9063 0.645508 40.9863C0.645508 63.0663 18.5655 80.9863 40.6455 80.9863C62.7255 80.9863 80.6455 63.0663 80.6455 40.9863C80.6455 18.9063 62.7255 0.986328 40.6455 0.986328ZM40.6455 12.9863C47.2855 12.9863 52.6455 18.3463 52.6455 24.9863C52.6455 31.6263 47.2855 36.9863 40.6455 36.9863C34.0055 36.9863 28.6455 31.6263 28.6455 24.9863C28.6455 18.3463 34.0055 12.9863 40.6455 12.9863ZM40.6455 69.7863C30.6455 69.7863 21.8055 64.6663 16.6455 56.9063C16.7655 48.9463 32.6455 44.5863 40.6455 44.5863C48.6055 44.5863 64.5255 48.9463 64.6455 56.9063C59.4855 64.6663 50.6455 69.7863 40.6455 69.7863Z" fill="#D9D9D9"/>
            </svg>
            <!--            <img class="profile-img" style="left: 20px" src="https://dummyimage.com/65x65/cf59cf/cf59cf" />-->
<!--            <img class="profile-img" style="left: 40px" src="https://dummyimage.com/65x65/597dcf/597dcf" />-->
          </div>
          <p>{{item.question_user_cnt}}명의 전문가가 응답했습니다</p>
        </div>
        <div class="detail-btn-wrapper">
          <button class="button natural mid" @click="$router.push({name: 'MyRequestEstimate', query: {'id': item.id}})">자세히보기</button>
        </div>
      </div>
    </div>
  </div>
  <div class="more-btn-wrapper">
    <button class="button natural mid" @click="getMyRequests(this.perPage + 3)" v-if="totalCount > perPage">더보기</button>
  </div>
</div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "MyRequest",
  data() {
    return {
      requests: ref([]),
      totalCount: ref(),
      pageCount: 1,
      perPage: 3,
      processCount: 0,
      endedCount: 0
    }
  },
  methods: {
    getMyRequests(page) {
      if (!page) {
        page = 3
      }
      this.axios.get('/estimate?page=1&size=' + page, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          console.log(res.data)
          this.totalCount = res.data.data.total
          this.pageCount = res.data.data.current_page
          this.perPage = res.data.data.per_page
          this.requests = res.data.data
          this.processCount = res.data.processCount
          this.endedCount = 0
        }
      }).catch(e => {

      });
    }
  },
  mounted() {
    this.getMyRequests()
  }
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