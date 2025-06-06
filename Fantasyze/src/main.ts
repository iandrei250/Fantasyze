import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(VueAxios, axios)
app.use(ToastService)
app.mount('#app')
