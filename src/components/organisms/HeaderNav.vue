<template>
<div class="custom-nav">
  <div class="nav-wrapper">
    <div class="logo-wrapper">
      <router-link to="/">
        <img src="/assets/images/logo.png" />
      </router-link>
    </div>
    <div class="menu-list-wrapper">
      <ul>
        <li>
          <router-link to="" class="">
            전문가매칭
          </router-link>
        </li>
        <li>
          <router-link to="" class="">
            전문가찾기
          </router-link>
        </li>
      </ul>
    </div>
    <div class="search-wrapper">
      <div class="search">
        <input type="text" class="search-input">
        <button class="search-icon">
          <img src="/assets/icons/search.png" />
        </button>
      </div>
    </div>
    <div class="auth-wrapper">
      <ul v-if="loginCheck === false">
        <li>
          <router-link to="" class="">
            전문가 등록
          </router-link>
        </li>
        <li>
          <router-link to="/auth/login" class="">
            로그인
          </router-link>
        </li>
        <li>
          <router-link to="/auth/register" class="button primary small">
            회원가입
          </router-link>
        </li>
      </ul>
      <ul v-if="loginCheck === true">
        <li>
          <router-link to="" class="" v-if="proCheck === true">
            받은 견적
          </router-link>
        </li>
        <li>
          <router-link to="" class="">
            채팅
          </router-link>
        </li>
        <li>
          <button type="button" class="button pink small" v-if="proCheck === false" @click="changePro">
            전문가로 전환
          </button>
          <button type="button" class="button primary small" v-if="proCheck === true" @click="changePro">
            고객으로 전환
          </button>
        </li>
        <li>
          <q-btn-dropdown
              no-caps
              unelevated
              @click="onMainClick"
          >
            <template v-slot:label>
              <div class="profile-menu-btn">
                <img src="/assets/icons/default_avatar.png" />
              </div>
            </template>
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick" v-if="proCheck === true">
                <q-item-section>
                  <q-item-label>
                    <router-link to="">받은 견적</router-link>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>
                    <router-link to="/profile">프로필 관리</router-link>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick" v-if="proCheck === true">
                <q-item-section>
                  <q-item-label>
                    <router-link to="">전문가 전환</router-link>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick" v-if="proCheck === false">
                <q-item-section>
                  <q-item-label>
                    <router-link to="">전문가 등록</router-link>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="logout">
                <q-item-section>
                  <q-item-label>
                    로그아웃
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HeaderNav",
  setup() {
    return {
      onMainClick () {
        // console.log('Clicked on main button')
      },

      onItemClick () {
        // console.log('Clicked on an Item')
      }
    }
  },
  methods: {
    logout() {
      this.axios.post('/auth/logout', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        this.$store.dispatch('logoutAccount')
      }).catch(e => {
        this.$store.dispatch('logoutAccount')
      });
    }
  },
  computed: {
    loginCheck() {
      // console.log(this.$store.getters.getUserLoginCheck)
      return this.$store.getters.getUserLoginCheck
    },
    proCheck() {
      // console.log(this.$store.getters.getUserProCheck)
      return this.$store.getters.getUserProCheck
    },
    changePro() {
      if (this.proCheck) {
        this.$store.dispatch('changePro', false)
      } else {
        this.axios.get('/user-info/change-pro', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }).then(res => {
          if (res.status === 200) {
            this.$store.dispatch('changePro', true)
          }
        }).catch(res => {

        })
      }
    }
  }
}
</script>

<style lang="scss">
.q-menu {
  width: 200px;
  border-radius: 15px!important;
  .q-item {
    text-align: center;
    a {
      color: black;
    }
  }
}
.custom-nav {
  border-bottom: 1px solid #E2E5E6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 88px;
  background: white;
  .nav-wrapper {
    width: 1160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .logo-wrapper {
      img {
        height: 30px;
      }
    }
    .menu-list-wrapper {
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        li {
          &:first-child {
            margin-right: 32px;
          }
          a {
            text-decoration: none;
            color: #373F41;
            font-weight: bold;
          }
        }
      }
    }
    .search-wrapper {
      .search {
        width: 300px;
        height: 40px;
        position: relative;
        .search-input {
          width: 100%;
          height: 100%;
          background: #EEEEEE;
          border: none;
          border-radius: 25px;
          box-sizing: border-box;
          padding: 0 13% 0 6%;
          font-size: 1.2rem;
          &:focus {
            outline: none;
          }
        }
        .search-icon {
          position: absolute;
          right: 3%;
          top: 25%;
          background: transparent;
          border: none;
          img {
            width: 17.5px;
          }
        }
      }
    }
    .auth-wrapper {
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        li {
          &:not(:last-child) {
            margin-right: 20px;
          }
          a {
            text-decoration: none;
            color: #1D192B;
            font-weight: bold;
            &.button {
              color: white;
            }
          }
          .profile-menu-btn {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            img {
              width: 32px;
            }
          }
        }
      }
    }
  }
}
</style>