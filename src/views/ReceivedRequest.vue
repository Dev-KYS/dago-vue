<template>
  <div class="received-request-container">
    <div class="title-wrapper">
      <h1>받은 의뢰</h1>
      <ul class="request-tab">
        <li>전체({{ totalCount }})</li>
        <li>지정의뢰(00)</li>
        <li>관심의뢰({{favoriteCount}})</li>
      </ul>
    </div>
    <div class="request-list-container">
      <div class="request-card-wrapper">
        <request-card-item v-for="item in requestData"
                           :item-id="item.id"
                           :avatar="item.has_estimate.has_user.avatar"
                           :state="item.has_status.title"
                           :name="item.has_estimate.has_user.name"
                           :title="item.has_estimate.has_category.title"
                           :contents="item.has_estimate.contents"
                           :date="item.date"
                           :is-favorite="item.is_favorite"
                           :end-time="item.endTime"
                           @favorite-count="changeCount"
        />
      </div>
    </div>
    <div class="more-btn-wrapper">
      <button class="button natural mid" @click="getLists(perPage + 3)" v-if="totalCount > perPage">더보기</button>
    </div>
  </div>
</template>

<script>
import RequestCardItem from "@/components/RequestCardItem.vue";
import {ref} from "vue";

export default {
  name: "ReceivedRequest",
  components: {RequestCardItem},
  data() {
    return {
      requestData: ref([]),
      totalCount: 0,
      favoriteCount: 0,
      perPage: 3
    }
  },
  methods: {
    getLists(size) {
      if (!size) {
        size = 3
      }
      this.axios.get('/receive_estimate?page=1&size=' + size, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          console.log(res.data)
          this.requestData = res.data.data.data
          this.totalCount = res.data.data.total
          this.favoriteCount = res.data.favoriteCount
          this.perPage = res.data.data.perPage
        }
      }).catch(e => {

      })
    },
    changeCount(val) {
      this.favoriteCount = val;
    }
  },
  mounted() {
    this.getLists()
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