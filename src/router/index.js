import Vue from 'vue'
import Router from 'vue-router'

 Vue.use(Router)

const Header = () => import('../components/Header')
const Index = () => import ('../components/Index')

const routes = [
    {
        path: '/',
        name: 'root',
        component: Header,
    }
]

const router = new Router({
    routes
});

export default router;