import Vue from 'vue';

import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './App';

Vue.use(VeeValidate);

Vue.prototype.$backendRoot = 'http://127.0.0.1:8000/api/'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});