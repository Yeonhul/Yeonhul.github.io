// import { createWebHistory, createRouter } from 'vue-router'
import { createWebHashHistory, createRouter } from 'vue-router'

const profile = () => import('@/view/profile.vue');
const project = () => import('@/view/project.vue');
const blog = () => import('@/view/blog.vue')


const routes = [
    {path: '/', name: 'profile', component: profile},
    {path: '/project', name: 'project', component: project},
    {path: '/blog', name: 'blog', component: blog},
]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router