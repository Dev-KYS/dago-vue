<template>
  <div class="main-banner">
    <div class="left-wrapper">
      <h1>정확하고 합리적인<br>전문가 매칭 플랫폼</h1>
      <p>정확하고 합리적인 전문가 매칭 플랫폼입니다 정확하고<br>합리적인 전문가 매칭 플랫폼입니다 정확하고 합리적인<br>전문가 매칭 플랫폼입니다 정확하고 합리적인<br>
        전문가 매칭 플랫폼입니다 </p>
      <button class="button primary mid">전문가에게 의뢰하기</button>
    </div>
    <div class="right-wrapper">
      <img src="/assets/images/main-banner.png" />
    </div>
  </div>
  <div class="category-list-wrapper">
    <category-list />
  </div>
  <div class="slide-banner-wrapper">
    <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
  <div class="process-wrapper">
    <h3>김대표만의 검증된 프로세스</h3>
    <process-slide />
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import CategoryList from "@/components/CategoryList.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProcessSlide from "@/components/ProcessSlide.vue";

export default {
  name: "Home",
  components: {ProcessSlide, CategoryList, Carousel, Slide, Pagination, Navigation},
}
</script>

<style lang="scss">
.main-banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20.42px;
  margin-bottom: 60px;
  .left-wrapper {
    h1 {
      font-size: 42px;
    }
    p {
      margin-top: 16px;
      margin-bottom: 0;
      color: #737B7D;
      line-height: 24px;
    }
    .button {
      margin-top: 92.77px;
    }
  }
  .right-wrapper {
    img {
      width: 607.91px;
    }
  }
}

.category-list-wrapper {
  margin-bottom: 57px;
}

.process-wrapper {
  margin-top: 91px;
}
</style>