import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './style.css'
import App from './App.vue'
import {router} from "./router"
import 'primeicons/primeicons.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
        preset: Aura
    }
  })
  .mount('#app')
