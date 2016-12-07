<template>
  <div class="row">
    <div class="user-icon col s10 offset-s2 m3 offset-m2">
      <img class="user-image" src="../assets/huaji.jpg">
    </div>
    <div class="user-info col s12 m5">
      <div class="user-title">User Anonymous</div>
      <hr>
      <div class="user-mobile"><i class="fa fa-lg fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;手机: 
        <span id="user-mobile">12345678900</span>
      </div>
      <div class="user-mail"><i class="fa fa-lg fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;邮箱: 
        <span id="user-mail">anonymous@easymeeting.com</span>
      </div>
      <div class="user-wechat"><i class="fa fa-lg fa-wechat" aria-hidden="true"></i>&nbsp;&nbsp;微信: 
        <span id="user-wechat">wx_anonymous</span>
      </div>
      <hr>
      <div class="user-intro"><i class="fa fa-lg fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;个人简介: 
        <span id="user-intro">只是一条简短的个人信息简介，再填充一点字数</span>
      </div>
    </div>
  </div>
  <div class="act-list">
    <div class="title">您创建的活动</div>
    <hr>
    <ul>
      <li>
        <div class="card">
          <div class="card-image">
            <img src="../assets/huaji.jpg">
          </div>
          <div class="card-content">
            <div class="title">Title</div>
            <div class="time">活动时间: 2016-12-6</div>
            <div class="place-and-num">活动地点: <span id="place" style="margin-right:50px;">412A</span>计划人数：<span id="num">4</span></div>
            <div class="info">活动简介: <span id="info">一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话</span></div>
          </div>
       </div>
      </li>
    </ul>
  </div>
  <div class="act-list">
    <div class="title">您参加的活动</div>
    <hr>
    <ul>
      <li>
        <div class="card">
          <div class="card-image">
            <img src="../assets/huaji.jpg">
          </div>
          <div class="card-content">
            <div class="title">Title</div>
            <div class="time">活动时间: 2016-12-6</div>
            <div class="place-and-num">活动地点: <span id="place" style="margin-right:50px;">412A</span>计划人数：<span id="num">4</span></div>
            <div class="info">活动简介: <span id="info">一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话</span></div>
          </div>
       </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less">

.row {
  margin-top: 20px;
  font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
  font-size: 18px;
  .user-image {
    width: 250px;
    margin: 0 auto;
    @media screen and (max-width: 350px) {
      width: 200px;
    }
    @media screen and (max-width: 1000px) and (min-width: 700px) {
      width: 160px;
    }
  }
  .user-title {
    font-size: 32px;
    font-weight: bold;
  }
  .user-mobile {
    margin-top: 10px;
  }
  .user-mail {
    margin-top: 10px;
  }
  .user-wechat {
    margin-top: 10px;
  }
  .user-intro {
    margin-top: 10px;
  }
}

.act-list {
  .title {
    font-size: 2em;
    @media screen and (max-width: 960px) {
      font-size: 1.2em;
    }
    font-weight: bold;
    font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
  }
  padding-left: 10%;
  width: 90%;
  @media screen and (max-width: 960px) {
    .title {
      padding-left: 20px;
    }
    padding-left: 0;
    width: 100%;
  }
  .card {
    font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
    .card-image {
      width: 150px;
      @media screen and (max-width: 960px) {
        width: 80px;
        margin-left: 20px;
      }
      float: left;
    }
    .card-content {
      margin-top: 0px;
      padding-top: 0px;
      padding-left: 200px;
      height: 200px;
      font-size: 1.1em;
      @media screen and (max-width: 960px) {
        padding-left: 120px;
        height: 120px;
        font-size: 0.8em;
      }
      .title {
        padding-left: 0px;
      }
      .info {
        margin-top: 5px;
        height: 31px;
        line-height: 16px;
        overflow-y: hidden;
      }
    }
  }
}

</style>

<script>
export default {
  name: 'homepage',
  methods: {

  }
}
</script>
