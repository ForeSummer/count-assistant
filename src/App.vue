<template>
<div>
  <div id="header-container">
    <div class="logo-container">
      <img src="./assets/logo.jpeg">
    </div>
    <div class="title"><p>团购统计助手</p></div>
  </div>
  <div id="main-container">
    <router-view></router-view>
  </div>
  <div id="footer-container">
    <p><i>软件学院学生会生活权益部出品</i></p>
    <p class="contant">bug反馈／功能建议：weigy14@gmail.com</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return {
      data: {
        items:[],
        customers: [],
        results:[]
      }
    }
  }
}
</script>

<style lang="less">

body {
  margin: 0;
  padding: 0;
}

#header-container {
  top: 0;
  position:fixed;
  height: 70px;
  text-align: center;
  width: 100%;
  border-bottom: 4px #43A047 solid;
  background: #fafafa;
  padding: 10px;
  z-index: 10000;
  div {
    display: inline-block;
  }
  .logo-container {
    position: absolute;
    width: 46px;
    height: 46px;
    left: 10%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    text-align: center;
    p{
      text-align: center;
      line-height: 50px;
      height: 50px;
      font-size: 25px;
      font-weight: bold;
    }
  }
}

#main-container {
  padding-top: 120px;
}

.container {
  width: 80%;
  margin: 0 auto;
  background: #f7f7f7;
  padding-left: 3%;
  padding-right: 3%;
  margin-bottom: 50px;
}

#footer-container {
  background: #43A047;
  color: #f7f7f7;
  width: 100%;
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  letter-spacing: 15px;
  bottom: 30px;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.12),0px 2px 2px rgba(0,0,0,0.24);
  p {
    text-align: center;
  }
  .contant {
    font-size: 14px;
    letter-spacing: 0px;
  }
}
</style>
