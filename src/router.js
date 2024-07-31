import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/bakery',
    name: 'Bakery',
    component: loadPage('BakeryPage')
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: loadPage('DrinksPage')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: loadPage('ShopPage')
  },
  {
    path: '/nightmenu',
    name: 'NightMenu',
    component: loadPage('NightMenuPage'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage'),
  },

  {
    path: '/test',
    name: 'Test',
    component: loadPage('TestPage'),
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
