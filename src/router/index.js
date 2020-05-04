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
        path: '/search',
        name: 'Search',
        component: () => import('../components/home/Search')
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('../components/home/Chat')
    },
    {
        path: '/chatIn',
        name: 'ChatIn',
        component: () => import('../components/home/ChatIn')
    },
    {
        path: '/mail',
        name: 'Mail',
        component: () => import('../components/mail/Mail')
    },
    {
        path: '/mailIn',
        name: 'MailIn',
        component: () => import('../components/mail/MailIn')
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
