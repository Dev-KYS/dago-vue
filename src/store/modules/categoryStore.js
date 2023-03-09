import axios from 'axios'

const categoryStore = {
    state: {
        selectCategory: [],
        selectCategoryTextList: [],
        categoryFormList: [],
    },
    mutations: {
        categoryListAdd(state, payload) {
            if(!state.selectCategory.includes(payload.id)) {
                state.selectCategory.push(payload.id)
                state.selectCategoryTextList.push(payload)
            }else{
                console.log('duplicate')
            }
        },
        categoryListRemove(state, payload) {
            if(state.selectCategory.includes(payload)) {
                const index = state.selectCategory.indexOf(payload)
                state.selectCategory.splice(index, 1)
            }
        },
        categoryFormListAdd(state, payload) {
            // console.log(payload)
            state.categoryFormList = payload
        }
    },
    actions: {
        setCategoryList({ commit }, payload) {
            commit('categoryListAdd', payload)
        },
        removeCategoryList({ commit }, payload) {
            commit('categoryListRemove', payload)
        },
        getCategoryFormList({ commit }) {
            axios.get('/profile_category', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(res => {
                commit('categoryFormListAdd', res.data.data)
            }).catch(error => {

            })
        }
    },
    getters: {
        getSelectCategoryTextList: function (state) {
            return state.selectCategoryTextList
        },
        getSelectCategoryIds: function (state) {
            return state.selectCategory
        },
        getCategoryFormList: function (state) {
            return state.categoryFormList
        }
    }
}

export default categoryStore