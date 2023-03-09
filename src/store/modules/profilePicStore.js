import axios from 'axios'

const profilePicStore = {
    state: {
        data: {
            image_1: {
                id: '',
                path: '',
            },
            image_2: {
                id: '',
                path: '',
            },
            image_3: {
                id: '',
                path: '',
            },
            image_4: {
                id: '',
                path: '',
            },
            image_5: {
                id: '',
                path: '',
            },
            link: '',
        }
    },
    mutations: {
        getProfilePic(state, payload) {
            state.data.image_1.id = payload.id
            state.data.image_2.id = payload.id
            state.data.image_3.id = payload.id
            state.data.image_4.id = payload.id
            state.data.image_5.id = payload.id
            state.data.image_1.path = payload.has_image1.hash_name
            state.data.image_2.path = payload.has_image2.hash_name
            state.data.image_3.path = payload.has_image3.hash_name
            state.data.image_4.path = payload.has_image4.hash_name
            state.data.image_5.path = payload.has_image5.hash_name

            state.data.link = payload.link
        }
    },
    actions: {
        getProfilePicAction({ commit }) {
            axios.get('/pic_video', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(res => {
                // console.log(res)
                commit("getProfilePic", res.data.data)
            }).catch(error => {

            })
        }
    },
    getters: {
        getProfilePic(state) {
            return state.data
        }
    }
}

export default profilePicStore