import App from './App'
import homepage from './components/homepage'
import about from './components/about'
import price from './components/price'
import actList from './components/activity-list'
import actDetail from './components/activity-detail'
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
          component: homepage
        },
        '/about': {
          component: about
        },
        '/price': {
          component: price
        },
        '/activity/list': {
          component: actList
        },
        '/activity/detail/:id': {
          component: actDetail
        },
        '/activity/create': {
          component: actCreate
        },
        '/activity/test': {
          component: customer
        },
        '/result': {
          component: result
        }
      }
    }  
  })
}
