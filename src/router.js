import App from './App'
import homepage from './components/homepage'
import about from './components/about'
import price from './components/price'
import actList from './components/activity-list'
import actDetail from './components/activity-detail'
import actUser from './components/activity-user'
import usrIntro from './components/user-intro'
import usrModify from './components/user-modify'
import message from './components/message'
import actCreate from './components/activity-create'
import validate from './components/validate'
import login from './login'

export default function(router) {
  router.map({
    '/': {
      component: App,
      subRoutes:{
        '/': {
          component: login
        },
        '/homepage':{
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
        '/activity/user/:id': {
          component: actUser
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
    },
    '/validate': {
      component: validate
    },
    '/login': {
      component: login
    }
  })
}
