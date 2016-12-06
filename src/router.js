import App from './App'
import homepage from './components/homepage'
import welcome from  './components/welcome'
import items from './components/items'
import customer from './components/customer'
import result from './components/result'

export default function(router) {
  router.map({
    '/': {
      component: App,
      subRoutes:{
        '/': {
          component: homepage
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
  })
}