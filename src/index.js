import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueClipboards from 'vue-clipboards'

import { store } from './_store'
import { router } from './_helpers'
import App from './App'

Vue.use(VeeValidate)
Vue.use(VueClipboards)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});