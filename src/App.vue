<template>
<div>
  <nav>
    <div class="nav-wrapper blue">
      <a v-link="{ path: '/' }" class="brand-logo white-text">EasyMeeting</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a>
      <ul class="right hide-on-med-and-down">
        <li><a v-link="{ path: '/activity/create' }" class="white-text">创建活动</a></li>
        <li><a v-link="{ path: '/user/' + userid }" class="white-text">个人中心</a></li>
        <li><a v-on:click="getAllList" class="white-text">活动大厅</a></li>
        <li><a v-link="{ path: '/message' }" class="white-text">我的私信<span class="alert-num" v-show="unreadMessage != 0">{{unreadMessage}}</span></a></li>
        <li><a v-link="{ path: '/price' }" class="white-text">费用说明</a></li>
        <li><a v-link="{ path: '/about' }" class="white-text">关于我们</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <div class="user-area">
          <a href="#" class="side-nav-icon"><img class="user-icon" src="assets/logo.jpeg"></a>
          <a href="#" class="side-nav-username">{{username}}</a>
          <a href="#" class="side-nav-info">{{userinfo}}</a>
        </div>
        <li><a v-link="{ path: '/activity/create' }">创建活动</a></li>
        <li><a v-link="{ path: '/user/' + userid }" >个人中心</a></li>
        <li><a v-on:click="getAllList" class="white-text">活动大厅</a></li>
        <li><a v-link="{ path: '/message' }" >我的私信<span class="alert-num" v-show="unreadMessage != 0">{{unreadMessage}}</span></a></li>
        <li><a v-link="{ path: '/price' }">费用说明</a></li>
        <li><a v-link="{ path: '/about' }">关于我们</a></li>
      </ul>
    </div>
  </nav>
  <div id="main-container">
    <router-view></router-view>
  </div>
  <footer class="page-footer white black-text">
    © 2016 Copyright 我们的组名不可能这么难起
  </footer>
</div>
</template>

<script>

import {
  ACT_SET_LIST,
  ACT_SET_TITLE
} from './vuex/mutation-types'

import {
  createActList
} from './vuex/actions'

import {
  test_act
} from './components/test'

export default {
  name: 'App',
  components: {

  },
  vuex: {
    getters: {
      maintitle: state => state.main.data.title,

      username: state => state.user.data.nickname,
      userid: state => state.user.data.openid,
      userinfo: state => state.user.data.userinfo,
      unreadMessage: state => state.user.data.unreadMessageNum,
    },
    actions: {
      getUserBriefInfo: function() {
         console.log("need to get info")
      },
      getAllList: function({dispatch}) {
        $.get('get act all list').done(function(res) {
          res = test_act
          dispatch(ACT_SET_LIST, createActList(res.data))
          dispatch(ACT_SET_TITLE, "活动大厅")
          window.location.href = "#!/activity/list"
        }).fail(function(res) {

        })
      }
    }
  },
  ready: function() {
    $(".button-collapse").sideNav({
      closeOnClick: true,
    });
    this.getUserBriefInfo()
  }
}
</script>

<style lang="less">

body {
  margin: 0;
  padding: 0;
  .nav-wrapper {
    .brand-logo {
      margin-left: 5%;
    }
    .material-icons img {
      width: 30px;
      height: 30px;
      margin-top: 15px;
    }
    .right {
      font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
    }
    .alert-num {
      margin-left: 10px;
      padding-left: 5px;
      padding-right: 5px;
      color: white;
      font-size: 16px;
      background-color: red;
      border-radius: 10px;
    }
    .side-nav {
      user-select: none;
      text-align: center;
      font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
      .user-area {
        padding-top: 50px;
        background: #2196F3;
        color: #fff;
        padding-left: 20px;
      }
      .side-nav-icon {
        text-align: left;
        height: 60px;
        .user-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .side-nav-username {
        text-align: left;
        font-size: 24px;
        height: 40px;
        color: #fff;
      }
      .side-nav-info {
        text-align: left;
        height: 50px;
        line-height: 25px;
        overflow-y: hidden;
        margin-bottom: 20px;
        color: #fff;
      }
      li {
        height: 70px;
        a {
          font-size: 18px;
        }
        
      }
    }
  }
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  .hidden {
    display: none;
  }
  footer {
    width: 320px;
    margin: 0 auto;
    margin-bottom: 50px;
    font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
  }
}

</style>
