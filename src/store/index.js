import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import userStore from '@/store/modules/userStore'
import categoryStore from '@/store/modules/categoryStore'
import profileStore from "@/store/modules/profileStore.js";
import educationStore from "@/store/modules/educationStore.js";
import careerStore from "@/store/modules/careerStore.js";
import profilePicStore from "@/store/modules/profilePicStore.js";
import estimateQuestionStore from "@/store/modules/estimateQuestionStore"

const store = createStore({
    modules: {
        userStore: userStore,
        categoryStore: categoryStore,
        profileStore: profileStore,
        educationStore: educationStore,
        careerStore: careerStore,
        profilePicStore: profilePicStore,
        estimateQuestionStore: estimateQuestionStore
    },
    plugins: [createPersistedState({
        paths: ["userStore", "estimateQuestionStore"]
    })]
})

export default store;