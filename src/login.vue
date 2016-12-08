<template>
  <div class="row login-container">
    <div class="card large col s6 offset-s3">
      <div class="left col s6">
        <div class="input-field">
          <input id="validate" type="text" class="validate">
          <label for="validate">请输入验证码</label>
        </div>
      </div>
      <div class="hr col s1">
        <img src="assets/hr.png">
      </div>
      <div class="right col s5">
        <img src="assets/qrcode.jpeg">
        <div>
          请关注微信公众号并在微信端获取验证码以登录
        </div>
        <a class="btn">登录</a>
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
  background: url('assets/banner.png');
  .card {
    top: 100px;
    .left {
      margin-top: 200px;
    }
    .hr {
      img {
        margin-top: 75px;
        margin-left: 40px;
      }
    }
    .right {
      text-align: center;
      img {
        width: 200px;
        height: 200px;
        margin-top: 80px;
      }
      .btn {
        margin-top: 30px;
      }
    }
  }
}

</style>
