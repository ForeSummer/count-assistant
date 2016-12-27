<template>
  <div class="row login-container">
    <div class="title center col s12">Welcome To EasyMeeting!</div>
    <div class="card large col s6 offset-s3">
      <div class="" ><a id="jump" v-link="{path: '/homepage'}"></a></div>
      <div class="left col s6">
        <div class="left-container">
          <div class="left-title">我已经是EasyMeeting的用户了！</div>
          <div class="">打开微信公众号界面获取6位验证码以验证身份</div>
          <div class="input-field">
            <input id="validate" type="text" class="validate" v-model="verifyCode">
            <label for="validate">请输入验证码</label>
          </div>
          <a class="btn" v-on:click="login()">登录</a>
        </div>
      </div>
      <div class="hr col s1">
        <img src="assets/hr.png">
      </div>
      <div class="right col s5">
        <div class="right-container">
          <div class="right-title">我第一次使用EasyMeeting～</div>
          <div class=""><img src="assets/qrcode.jpeg"></div>
          <div class="">请关注微信公众号加入我们吧！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">

.login-container {
  margin: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  background: url('assets/banner.png') no-repeat;
  background-size: 100% 100%;
  .title {
    font-size: 50px;
    color: white;
    font-style: italic;
    margin-top: 20px;
    @media screen and (min-width: 1900px) {
      margin-top: 100px;
    }
    margin-bottom: 40px;
  }
  .card {
    border-radius: 10px;
    .hr {
      img {
        margin-top: 80px;
        margin-left: 40px;
      }
    }
    .left {
      text-align: center;
      .left-container {
        margin-top: 20px;
        .left-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 120px;
        }
      }
    }
    .right {
      text-align: center;
      .right-container {
        margin-top: 20px;
        .right-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 80px;
        }
        img {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
}

</style>

<script>

import {

} from './vuex/mutation-types'

export default {
  name: 'login',
  components: {

  },
  data: function() {
    return {
      verifyCode: ''
    }
  },
  vuex: {
    getters: {
      userID: state => state.user.data.openid
    },
    actions: {
      checkUser: function({dispatch}){
        $.get().done(function(res) {

        }).fail()
      },
      login: function({dispatch}) {
        let param = {
          "code": this.verifyCode
        }
        $.ajax({
          type: "post",
          url: '',
          data: JSON.stringify(param),
          contentType: 'application/json;charset=utf-8',
          success: function(res){
            $("nav").show()
            $("footer").show()
            window.location.href=$("#jump")[0].hash
          },
          error: function(res) {
            console.log(res)
          }
        })
      }
    }
  },
  ready: function() {
    /* if(this.userID!="") {
      window.location.href=$("#jump")[0].hash
      return
    } */
    $("nav").hide();
    $("footer").hide();
    this.checkUser();
  }
}
</script>
