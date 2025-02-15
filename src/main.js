import Vue from 'vue'
import App from "./App";
import VeeValidate from 'vee-validate'
import VueClipboard from 'vue-clipboard2'
import VueMoment from 'vue-moment'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faDownload, faStar, faExternalLinkAlt, faCopy, faSearch, faList, faSignOutAlt, faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrash, faDownload, faStar, faExternalLinkAlt, faCopy, faSearch, faList, faSignOutAlt, faGlassCheers)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import { store } from './_store'
import { router } from './_helpers'

Vue.use(VeeValidate)
Vue.use(VueClipboard)
Vue.use(VueMoment)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
