<template>
<div>
  <div id="header-container"></div>
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

#app {
  color: #2c3e50;
  
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  a {
    color: #42b983;
    text-decoration: none;
  }
}

.logo {
  width: 100px;
  height: 100px
}

#header-container {

}

#footer-container {
  background: #43A047;
  color: #f7f7f7;
  width: 100%;
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  letter-spacing: 15px;
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
