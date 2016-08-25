import V from './common'
import App from './App'

import Router from 'vue-router'
import routerMap from './router.js'
import store from './vuex/store'

import '../node_modules/semantic-ui-css/semantic.min.css'
import semantic from 'semantic'

V.Vue.use(Router)
//

const router = new Router();

routerMap(router)

const vm = V.Vue.extend({store});

router.start(vm, '#app');
