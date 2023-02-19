<template>
<div class="process-slide">
  <div class="step-line">
    <div class="line"></div>
    <ul>
      <li :class="{'active' : step === 1}">
        <span></span>
        프로젝트 의뢰
      </li>
      <li :class="{'active' : step === 2}">
        <span></span>
        질문답변을 통한 상담
      </li>
      <li :class="{'active' : step === 3}">
        <span></span>
        견적 전송
      </li>
      <li :class="{'active' : step === 4}">
        <span></span>
        프로젝트 진행
      </li>
    </ul>
  </div>
  <div class="process-content">
    <div class="process-content-item" v-show="step === 1">
      <button class="prev-btn" @click="step = 4">
        <img src="/assets/icons/arrow.png">
      </button>
      <button class="next-btn" @click="step = 2">
        <img src="/assets/icons/arrow.png">
      </button>
      <div class="text-wrapper">
        <p><b>Step 1.</b> 프로젝트 의뢰</p>
        <span>전문가에게 프로젝트를 등록해 주시면 견적<br>상담과 내용 작성을 도와드립니다.</span>
      </div>
      <div class="image-wrapper">
        <img src="/assets/images/process_01.png" />
      </div>
    </div>

    <div class="process-content-item" v-show="step === 2">
      <button class="prev-btn" @click="step = 1">
        <img src="/assets/icons/arrow.png">
      </button>
      <button class="next-btn" @click="step = 3">
        <img src="/assets/icons/arrow.png">
      </button>
      <div class="text-wrapper">
        <p><b>Step 2.</b> 질문답변을 통한 상담</p>
        <span>전문가에게 프로젝트를 등록해 주시면 견적<br>상담과 내용 작성을 도와드립니다.</span>
      </div>
      <div class="image-wrapper">
        <img src="/assets/images/process_02.png" />
      </div>
    </div>

    <div class="process-content-item" v-show="step === 3">
      <button class="prev-btn" @click="step = 2">
        <img src="/assets/icons/arrow.png">
      </button>
      <button class="next-btn" @click="step = 4">
        <img src="/assets/icons/arrow.png">
      </button>
      <div class="text-wrapper">
        <p><b>Step 3.</b> 견적 전송</p>
        <span>전문가에게 프로젝트를 등록해 주시면 견적<br>상담과 내용 작성을 도와드립니다.</span>
      </div>
      <div class="image-wrapper">
        <img src="/assets/images/process_02.png" />
      </div>
    </div>

    <div class="process-content-item" v-show="step === 4">
      <button class="prev-btn" @click="step = 3">
        <img src="/assets/icons/arrow.png">
      </button>
      <button class="next-btn" @click="step = 1">
        <img src="/assets/icons/arrow.png">
      </button>
      <div class="text-wrapper">
        <p><b>Step 4.</b> 프로젝트 진행</p>
        <span>전문가에게 프로젝트를 등록해 주시면 견적<br>상담과 내용 작성을 도와드립니다.</span>
      </div>
      <div class="image-wrapper">
        <img src="/assets/images/process_04.png" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProcessSlide",
  data() {
    return {
      step: 1,
    }
  }
}
</script>

<style lang="scss">
.process-slide {
  .step-line {
    width: 100%;
    position: relative;
    .line {
      width: 100%;
      height: 2px;
      background: #EFE4EB;
      position: absolute;
      top: 17%;
      z-index: -1;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.active {
          color: #FF0099;
          font-weight: bold;
          span {
            background: #FF0099;
            border-color: #FF0099;
          }
        }
        span {
          display: block;
          border: 3px solid #EFE4EB;
          width: 20px;
          height: 20px;
          box-sizing: border-box;
          border-radius: 50%;
          background: white;
          margin-bottom: 10px;
          font-size: 20px;
          color: #2C2C2C;
        }
      }
    }
  }
  .process-content {
    margin-top: 29px;
    .process-content-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 1159.04px;
      height: 477.68px;
      border-radius: 30px;
      box-shadow: 0px 4px 8px rgba(207, 215, 226, 0.64);
      padding: 35px 120px 39px 36px;
      box-sizing: border-box;
      position: relative;
      .prev-btn, .next-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: white;
        border: none;
        box-shadow: 0px 4px 8px rgba(207, 215, 226, 0.64);
        position: absolute;
        cursor: pointer;
        img {
          width: 13px;
        }
      }
      .prev-btn {
        left: -3%;
        top: 42%;
      }
      .next-btn {
        right: -3%;
        top: 42%;
        img {
          rotate: 180deg;
        }
      }
      .text-wrapper {
        p {
          color: #2C2C2C;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 37px;
          margin-top: 0;
          b {
            color: #FF0099;
          }
        }
        span {
          font-size: 24px;
          font-weight: bold;
        }
      }
      .image-wrapper {
        img {
          width: 343px;
        }
      }
    }
  }
}
</style>