import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import welcome from  './components/welcome'
import items from './components/items'
import customer from './components/customer'
import result from './components/result'

import '../node_modules/semantic-ui-css/semantic.min.css'
import semantic from 'semantic'

Vue.use(VueRouter);

/* eslint-disable no-new */
/*var vm = new Vue({
  el: 'body',
  components: { App }
});*/

var vm = Vue.extend({});

var router = new VueRouter();

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
