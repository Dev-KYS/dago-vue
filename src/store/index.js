import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            userInfo: null,
            isLogin: false
        }
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
        }
    }
})

export default store;