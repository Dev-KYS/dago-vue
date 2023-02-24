import router from '@/router'

const userStore = {
    state: {
        userEmail: '',
        userName: '',
        token: '',
    },
    mutations: {
        login: function (state, payload) {
            state.userEmail = payload.email
            state.userName = payload.name
            state.token = payload.token
        },
        loginCheck: function (state) {
            if (!state.token) {
                router.push({
                    name: 'Login'
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}