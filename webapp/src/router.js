import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Customers from './pages/Customers.vue'
import Orders from './pages/Orders.vue'
import Campaigns from './pages/Campaigns.vue'
import TeamTabs from './pages/TeamTabs.vue'
import TeamTiles from './pages/TeamTiles.vue'
import Messages from './pages/Messages.vue'
import Tasks from './pages/Tasks.vue'
import Applications from './pages/Applications.vue'
import Settings from './pages/Settings.vue'
import Signin from './pages/Signin.vue'
import Signup from './pages/Signup.vue'
import ResetPassword from './pages/ResetPassword.vue'

const routerHistory = createWebHashHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/customers',
      component: Customers
    },
    {
      path: '/orders',
      component: Orders
    },
    {
      path: '/campaigns',
      component: Campaigns
    },
    {
      path: '/team-tabs',
      component: TeamTabs
    },
    {
      path: '/team-tiles',
      component: TeamTiles
    },
    {
      path: '/messages',
      component: Messages
    },
    {
      path: '/tasks',
      component: Tasks
    },
    {
      path: '/applications',
      component: Applications
    },
    {
      path: '/settings',
      component: Settings
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
  ]
})

export default router
