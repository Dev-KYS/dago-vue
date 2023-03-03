import axios from 'axios'

const categoryStore = {
    state: {
        selectCategory: [],
    },
    mutations: {
        categoryListAdd(state, payload) {
            state.selectCategory.push(payload)
        }
    },
    actions: {
        setCategoryList({ commit }) {

        }
    },
    getters: {

    }
}

export default categoryStore