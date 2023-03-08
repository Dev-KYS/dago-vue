import axios from 'axios'

const profileStore = {
    state: {
        company_name: '',
        city: '',
        com_start_time: '',
        com_end_time: '',
        pay_card: false,
        pay_bank: false,
    },
    mutations: {
        getProfile(state, payload) {
            state.company_name = payload.company_name
            state.city = payload.city
            state.com_start_time = payload.start_communicate_time
            state.com_end_time = payload.end_communicate_time
            state.pay_card = payload.pay_card
            state.pay_bank = payload.pay_bank
        }
    },
    actions: {
        getProfileAction({ commit }) {
            axios.get('/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(res => {
                console.log(res)
                commit('getProfile', res.data.data)
            }).catch(error => {

            })
        }
    },
    getters: {
        getProfileData: function (state) {
            const data = {}
            data.company_name = state.company_name
            data.city = state.city
            data.com_start_time = state.com_start_time
            data.com_end_time = state.com_end_time
            data.pay_card = state.pay_card
            data.pay_bank = state.pay_bank

            return data
        }
    }
}

export default profileStore