import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from "./App.vue";
import router from "@/router.js";
import axios from "axios";
import store from "@/store"
import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'


axios.defaults.baseURL = 'http://localhost:8000/api'

// createApp(App)
//     .use(router)
//     .mount('#app')

const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(store).use(router).use(Quasar).mount('#app')