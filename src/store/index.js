import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import userStore from '@/store/modules/userStore'
import categoryStore from '@/store/modules/categoryStore'

const store = createStore({
    modules: {
        userStore: userStore,
        categoryStore: categoryStore
    },
    plugins: [createPersistedState({
        paths: ["userStore"]
    })]
})

export default store;