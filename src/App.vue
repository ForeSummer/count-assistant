<template>
  <div class="header-container"></div>
  <div class="main-container">
    <div id="app">test whether less loader is loaded <a>test!</a></div>
    <div class="ui icon input">
  <input type="text" placeholder="Search...">
  <i class="inverted circular search link icon"></i>
</div>
  </div>
  <div class="footer-container"></div>
</template>

<script>
import Hello from './components/Hello'
import welcome from  './components/welcome'
import items from './components/items'
import customer from './components/customer'
import result from './components/result'
//import semantic from '../semantic/dist/semantic.min.js'

export default {
  components: {
    welcome,
    items,
    customer,
    result
  }
}
</script>

<style lang="less">

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
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
</style>
