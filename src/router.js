import App from './App'
import welcome from  './components/welcome'
import items from './components/items'
import customer from './components/customer'
import result from './components/result'
import actCreate from './components/activity-create'

export default function(router) {
  router.map({
    '/': {
      component: App,
      subRoutes:{
        '/': {
          component: welcome
        },
        '/activity/create': {
          component: actCreate
        },
        '/activity／test': {
          component: customer
        },
        '/result': {
          component: result
        }
      }
    }  
  })
}