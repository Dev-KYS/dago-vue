<template>
  <div class="container">
    <div class="contract-wrapper">
      <div class="contract-content-wrapper">
        <div class="contract-title-wrapper">
          <label>전자계약서 서명</label>
          <ul>
            <li>김대표에서는 고객님의 금전과 지식재산권을 지켜드립니다.</li>
            <li>본 전자계약서는 고객님의 금전과 지식재산권 등을 보호하는데 <span>법적 효력</span>이 있음을 알려드립니다.</li>
          </ul>
        </div>
        <!-- Page Contents -->
        <div class="contract-content">
          <div class="contract-content-title">
            <label>계약서</label>
          </div>
          <div class="contract-content-in">
            <p>계약내용</p>
          </div>
          <div class="contract-content-sign-wrapper">
            <div class="contract-content-sign-item-wrapper">
              <div class="contract-content-sign-item">
                <p>(을)</p>
                <div class="contract-content-sign-filed">
                  <p>성명 : 김다른</p><p>(인)</p>
                </div>
                <p>주소 : 대전광역시 유성구 복용남로 5-7, 2층</p>
                <p>전화번호 : 010-1234-5678</p>
              </div>
            </div>
            <div class="contract-content-sign-item-wrapper">
              <div class="contract-content-sign-item">
                <p>(갑)</p>
                <div class="contract-content-sign-filed">
                  <p>성명 : 김다른</p><p>(인)</p>
                </div>
                <p>주소 : 대전광역시 유성구 복용남로 5-7, 2층</p>
                <p>전화번호 : 010-1234-5678</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contract-footer-button-wrapper">
          <div>
            <custom-button button-class="primary-natural mid" text="서명하기" @click="signModalShow=true"/>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <sign :show="signModalShow" @close="signModalShow = false" @sign-close="signClose"/>
    </Teleport>
  </div>
</template>

<script>
import CustomButton from "@/components/atoms/CustomButton.vue";
import Sign from "@/components/modal/Sign.vue";

export default {
  name: "ContractSign",
  components: {Sign, CustomButton},
  data() {
    return {
      signModalShow: false
    }
  },
  methods: {
    getContract() {
      this.axios.get('/contract/' + this.$route.params.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        if (res.data.status === 'success') {
          console.log(res.data.data)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    signClose(img) {
      console.log(img)
    }
  },
  mounted() {
    this.getContract()
  }
}
</script>

<style lang="scss">
.contract-wrapper {
  display: flex;

  .contract-content-wrapper {
    margin-top: 40px;
    flex: 6;

    .contract-title-wrapper {
      label {
        font-weight: bold;
        font-size: 32px;
        color: #1B1B1B;
      }
      ul {
        li {
          span {
            color: #FF0000;
          }
        }
      }
    }
  }

  .contract-content {
    margin: 40px 0;
    width: 760px;
    height: 598px;
    border: 1px solid #181818;
    display: flex;
    flex-direction: column;
    .contract-content-title {
      display: flex;
      label {
        margin: auto;
        font-weight: bold;
        font-size: 20px;
      }
    }
    .contract-content-in {
      flex: 3;
      margin: 20px;
    }
    .contract-content-sign-wrapper {
      display: flex;
      flex-direction: row;
      .contract-content-sign-item-wrapper {
        flex: 1;
        margin: 20px;
        border: 1px solid #A6A6A6;
        .contract-content-sign-item {
          margin: 10px;
          .contract-content-sign-filed {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
        }
      }
    }
  }

  .contract-footer-button-wrapper {
    width: 760px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 40px;
  }
}
</style>