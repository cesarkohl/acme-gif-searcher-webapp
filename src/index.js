import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueClipboard from 'vue-clipboard2'

import { store } from './_store'
import { router } from './_helpers'
import App from './App'

Vue.use(VeeValidate)
Vue.use(VueClipboard)

console.log(JSON.parse(localStorage.getItem('user')));

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});