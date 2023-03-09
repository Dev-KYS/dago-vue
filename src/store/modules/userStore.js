import router from '@/router'
import axios from "axios";

const userStore = {
    state: {
        userInfo: null,
        isLogin: false,
        avatar: null,
    },
    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = true
            state.userInfo = payload
        },
        logout(state) {
            state.isLogin = false
            state.userInfo = null
            localStorage.removeItem('access_token')
        },
    },
    actions: {
        getAccountInfo({ commit }) {
            let token = localStorage.getItem('access_token')
            axios.get('/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => {
                    commit('loginSuccess', res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        logoutAccount({ commit }) {
            commit('logout')
        },
    },
    getters: {
        getUserLoginCheck: function (state) {
            return state.isLogin
        },
        getUserProCheck: function (state) {
            return state.userInfo.data.is_pro
        },

    }
}

export default userStore