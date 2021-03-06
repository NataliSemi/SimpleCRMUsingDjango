import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

import Dashboard from '../views/dashboard/Dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import Leads from '../views/dashboard/Leads.vue'
import AddLead from '../views/dashboard/AddLead.vue'
import Lead from '../views/dashboard/Lead.vue'
import EditLead from '../views/dashboard/EditLead.vue'
import AddTeam from '../views/dashboard/AddTeam.vue'
import Team from '../views/dashboard/Team.vue'
import AddMember from '../views/dashboard/AddMember.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/log-in',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/team',
    name: 'Team',
    component: Team,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/team/add-member',
    name: 'AddMember',
    component: AddMember,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/add-team',
    name: 'AddTeam',
    component: AddTeam,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/leads',
    name: 'Leads',
    component: Leads,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/leads/add',
    name: 'AddLead',
    component: AddLead,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/leads/:id',
    name: 'Lead',
    component: Lead,
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/dashboard/leads/:id/edit',
    name: 'EditLead',
    component: EditLead,
    meta: {
      requiredLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
