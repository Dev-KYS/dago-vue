import axios from 'axios'

const careerStore = {
    state: {
        careerList: []
    },
    mutations: {
        addCareerList(state, payload) {
            state.careerList = payload
        }
    },
    actions: {
        getCareerList({ commit }) {
            axios.get('/career', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(res => {
                console.log(res)
                commit('addCareerList', res.data.data)
            }).catch(error => {

            })
        }
    },
    getters: {
        getCareerList(state) {
            return state.careerList
        }
    }
}

export default careerStore