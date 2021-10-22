import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store';
import header from '@/components/header.vue'

createApp(App)
.use(store)
.use(router)
.component('He',header)
.mount('#app');