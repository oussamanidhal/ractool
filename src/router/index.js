import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Signin from '../components/Signin.vue'
import AddMember from '../components/AddMember.vue'
import EventMan from '../views/EventMan.vue'
import UserProfil from '@/views/UserProfil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/Add-member',
    name: 'add member',
    component: AddMember
  },
  {
    path: '/User-Profil',
    name: 'User Profil',
    component: UserProfil
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/EventMan',
    name: 'event man',
    component: EventMan
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



