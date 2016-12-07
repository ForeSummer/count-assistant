import App from './App'
import homepage from './components/homepage'
import about from './components/about'
import price from './components/price'
import actList from './components/activity-list'
import actDetail from './components/activity-detail'
import usrIntro from './components/user-intro'
import usrModify from './components/user-modify'
import message from './components/message'
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
        '/user/:id': {
          component: usrIntro
        },
        '/modify': {
          component: usrModify
        },
        '/message': {
          component: message
        },
        '/activity/create': {
          component: actCreate
        }
      }
    }  
  })
}
