import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../components/home/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('../components/home/Chat')
    },
    {
        path: '/mail',
        name: 'Mail',
        component: () => import('../components/mail/Mail')
    },
    {
        path: '/find',
        name: 'Find',
        component: () => import('../components/find/Find')
    },
    {
        path: '/me',
        name: 'Me',
        component: () => import('../components/me/Me')
    }
];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
