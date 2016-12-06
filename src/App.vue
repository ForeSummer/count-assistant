<template>
<div>
  <nav>
    <div class="nav-wrapper white">
      <a href="#!" class="brand-logo black-text">EasyMeeting</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons"><img src="assets/Menu.png"></i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html" class="black-text">创建活动</a></li>
        <li><a href="badges.html" class="black-text">个人中心</a></li>
        <li><a href="collapsible.html" class="black-text">我的私信</a></li>
        <li><a href="mobile.html" class="black-text">费用说明</a></li>
        <li><a href="mobile.html" class="black-text">关于我们</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <div>
          <a href="#" class="side-nav-icon"><img class="user-icon" src="assets/logo.jpeg"></a>
          <a href="#" class="side-nav-username">Username</a>
          <a href="#" class="side-nav-info">Info填充字数填充字数填充字数填充字数填充字数填充字数填充字数填充字数填充字数填充字数填充字数填充字数填充字数</a>
        </div>
        <li><a href="sass.html">创建活动</a></li>
        <li><a href="badges.html">个人中心</a></li>
        <li><a href="collapsible.html">我的私信<span class="alert-num">5</span></a></li>
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
    .side-nav {
      text-align: center;
      padding-top: 50px;
      font-family: 'Microsoft Yahei';
      .side-nav-icon {
        text-align: left;
        height: 60px;
        .user-icon {
          width: 60px;
          height: 60px;
        }
      }
      .side-nav-username {
        text-align: left;
        font-size: 24px;
        height: 40px;
      }
      .side-nav-info {
        text-align: left;
        height: 50px;
        line-height: 25px;
        overflow-y: hidden;
        margin-bottom: 20px;
      }
      li {
        height: 70px;
        a {
          font-size: 18px;
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
      }
    }
  }
}

</style>
