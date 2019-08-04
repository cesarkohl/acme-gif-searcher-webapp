import Vue from 'vue';
import Router from 'vue-router';

import PageHome from '../components/PageHome'
import PageLogin from '../components/PageLogin'
import PageRegister from '../components/PageRegister'
import PagePostCreate from "../components/PagePostCreate"
import PagePostIndex from "../components/PagePostIndex"
import PagePostEdit from "../components/PagePostEdit"
import PageSearchIndex from "../components/PageSearchIndex"
import PageSearchLog from "../components/PageSearchLog"

Vue.use(Router);

export const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: PageHome, name: 'home' },
    { path: '/login', component: PageLogin, name: 'login' },
    { path: '/register', component: PageRegister, name: 'register' },

    { path: '/posts', component: PagePostIndex, name: 'post-index' },
    { path: '/posts/create', component: PagePostCreate, name: 'post-create' },
    { path: '/posts/:id/edit', component: PagePostEdit, name: 'post-edit' },

    { path: '/search', component: PageSearchIndex, name: 'search-index' },
    { path: '/search/log', component: PageSearchLog, name: 'search-log' },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})