import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import head from '@/components/header.vue'

createApp(App)
.use(store)
.use(router)
.component('He-der', head)
.mount('#app');
