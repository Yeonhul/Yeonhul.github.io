import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import head from './views/header.vue'

createApp(App)
.use(store)
.use(router)
.component('he-der', head)
.mount('#app');
