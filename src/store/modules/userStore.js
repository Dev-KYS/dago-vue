import router from '@/router'
import axios from "axios";

const userStore = {
    state: {
        userInfo: null,
        isLogin: false,
        avatar: null,
        isPro: false
    },
    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = true
            state.userInfo = payload
            state.isPro = payload.data.is_pro
        },
        logout(state) {
            state.isLogin = false
            state.userInfo = null
            localStorage.removeItem('access_token')
        },
        proState(state, payload) {
            console.log(payload)
            state.isPro = payload
        }
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
        changePro({commit}, state) {
            commit('proState', state)
        }
    },
    getters: {
        getUserLoginCheck: function (state) {
            return state.isLogin
        },
        getUserProCheck: function (state) {
            return state.isPro
        },

    }
}

export default userStore