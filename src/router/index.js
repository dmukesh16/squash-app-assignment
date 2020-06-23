import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrationForm from '../pages/RegistrationForm'
import RegistrationSuccess from '../pages/RegistrationSuccess'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: RegistrationForm
    },
    {
        path: '/registration-success',
        component: RegistrationSuccess
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})