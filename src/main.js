import Vue from 'vue'
import App from './App'

import '../node_modules/semantic-ui-css/semantic.min.css'
import semantic from 'semantic'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})


console.log($('body').css('height'));