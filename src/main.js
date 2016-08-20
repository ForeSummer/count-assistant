import Vue from 'vue'
import App from './App'
//import Vuex from 'vuex'
//import VueRouter from 'vue-router'
import Router from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

import welcome from  './components/welcome'
import items from './components/items'
import customer from './components/customer'
import result from './components/result'

import '../node_modules/semantic-ui-css/semantic.min.css'
import semantic from 'semantic'

Vue.use(Router)
Vue.use(Vuex)



/* eslint-disable no-new */
/*var vm = new Vue({
  el: 'body',
  components: { App }
});*/

const vm = Vue.extend({store});

const router = new Router();

sync(store, router);

router.map({
	'/': {
		component: App,
		subRoutes:{
			'/': {
				component: welcome
			},
			'/first': {
		        component: items
		    },
		    '/second': {
		        component: customer
		    },
		    '/result': {
		    	component: result
		    }
		}
	}  
});

router.start(vm, 'body');
