<template>
<div>
  <nav>
    <div class="nav-wrapper white">
      <a href="#!" class="brand-logo black-text">{{maintitle}}</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons"><img src="assets/Menu.png"></i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html" class="black-text">创建活动</a></li>
        <li><a href="badges.html" class="black-text">个人中心</a></li>
        <li><a href="collapsible.html" class="black-text">我的私信<span class="alert-num" v-show="unreadMessage != 0">{{unreadMessage}}</span></a></li>
        <li><a href="mobile.html" class="black-text">费用说明</a></li>
        <li><a href="mobile.html" class="black-text">关于我们</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <div class="user-area">
          <a href="#" class="side-nav-icon"><img class="user-icon" src="assets/logo.jpeg"></a>
          <a href="#" class="side-nav-username">{{username}}</a>
          <a href="#" class="side-nav-info">{{userinfo}}</a>
        </div>
        <li><a v-link="/activity/create">创建活动</a></li>
        <li><a href="badges.html">个人中心</a></li>
        <li><a href="collapsible.html">我的私信<span class="alert-num" v-show="unreadMessage != 0">{{unreadMessage}}</span></a></li>
        <li><a href="mobile.html">费用说明</a></li>
        <li><a href="mobile.html">关于我们</a></li>
      </ul>
    </div>
  </nav>
  <div id="main-container">
    <router-view></router-view>
  </div>
  <footer class="page-footer">
    <div class="footer-copyright">
      <div class="container">
      © 2016 Copyright 我们的组名不可能这么难起 
      <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  vuex: {
    getters: {
      maintitle: state => state.main.data.title,

      username: state => state.user.data.nickname,
      userinfo: state => state.user.data.userinfo,
      unreadMessage: state => state.user.data.unreadMessageNum,
    },
    actions: {
      
    }
  },
  ready: function() {
    $(".button-collapse").sideNav();
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
      font-family: 'Microsoft Yahei';
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
      font-family: 'Microsoft Yahei';
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
}

</style>
