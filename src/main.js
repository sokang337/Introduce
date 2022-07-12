import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import interactive web css */
require('./assets/scss/common.scss')

createApp(App).use(router).mount('#app')
