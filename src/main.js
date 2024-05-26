import './assets/main.css'
import '@/assets/styles.scss'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { plugin } from '@formkit/vue'
import FormKitOptions from "../formkit.config.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, FormKitOptions)

app.mount('#app')
