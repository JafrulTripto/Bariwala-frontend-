import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)



import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'

window.toastr = require('toastr')

Vue.use(VueToastr2)


import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({

        name:'signIn',
      })
    } else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.isLoggedIn) {
      next({
        path:'/dashboard',
      })
    } else {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})

import {store} from "./store/store";

Vue.config.productionTip = false

new Vue({
  store,
  router:router,
  render: h => h(App),
}).$mount('#app')
