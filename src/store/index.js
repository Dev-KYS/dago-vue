import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import userStore from '@/store/modules/userStore'

const store = createStore({
    modules: {
        userStore: userStore,
    },
    plugins: [createPersistedState({
        paths: ["userStore"]
    })]
})

export default store;