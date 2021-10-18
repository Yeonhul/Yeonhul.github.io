// import { createWebHistory, createRouter } from 'vue-router'
import { createWebHashHistory, createRouter } from 'vue-router'
// import main from '@/views/main.vue'
// import content1 from '@/views/content1.vue'

const mainpage = () => import('@/views/main.vue'); //Lazy load
const COLOR_LIST = () => import('@/views/content1.vue'); //Lazy load

const routes = [
    {
        path: '/',
        name: 'main',
        component: mainpage,
    },

    {
        path: '/ColorList', 
        name: 'color_list', 
        component: COLOR_LIST, 
        props: true
    }
]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router