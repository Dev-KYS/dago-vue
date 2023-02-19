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
      <ul>
        <li>
          <router-link to="" class="">
            전문가 등록
          </router-link>
        </li>
        <li>
          <router-link to="" class="">
            로그인
          </router-link>
        </li>
        <li>
          <router-link to="/auth/register" class="button primary small">
            회원가입
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style lang="scss">
.custom-nav {
  border-bottom: 1px solid #E2E5E6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 88px;
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
        }
      }
    }
  }
}
</style>