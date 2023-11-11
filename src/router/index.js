import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: '/index',
            name: 'index',
            redirect: '/index/home',
            component: () => import('../views/index/IndexView.vue'),
            children: [
                {
                    path: 'home',
                    name: 'home',
                    components: {
                        home: () => import('../components/home/Home.vue')
                    }
                },
                {
                    path: 'commonlyused',
                    name: 'commonlyused',
                    components: {
                        commonlyUsed: () => import('../components/home/CommonlyUsed.vue')
                    }
                },
                {
                    path: 'blog',
                    name: 'blog',
                    components: {
                        blog: () => import('../components/home/Blog.vue')
                    }
                },
                {
                    path: 'dev',
                    name: 'dev',
                    components: {
                        dev: () => import('../components/home/Dev.vue')
                    }
                },
                {
                    path: 'tool',
                    name: 'tool',
                    components: {
                        tool: () => import('../components/home/Tool.vue')
                    }
                },
                {
                    path: 'nav',
                    name: 'nav',
                    components: {
                        nav: () => import('../components/home/Nav.vue')
                    }
                },
            ]
        },
    ]
})

export default router
