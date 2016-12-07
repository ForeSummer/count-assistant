<template>
  <div class="search-field">
    <input class="input" id="search" type="text" class="validate">
    <button class="btn" type="submit" name="action">搜索</button>
  </div>
  <div class="act-list">
    <div class="title">查找结果</div>
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

.search-field {
  width: 350px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  .input {
    width: 200px;
  }
  .btn {
    margin-left: 20px;
    width: 100px;
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
    overflow: hidden;
    height: 200px;
    @media screen and (max-width: 960px) {
      height: 130px;
    }
    .card-image {
      width: 150px;
      @media screen and (max-width: 960px) {
        width: 80px;
        margin-left: 20px;
      }
      float: left;
    }
    .card-content {
      padding-left: 200px;
      font-size: 1.1em;
      .title {
        padding-left: 0px;
      }
      .info {
        margin-top: 5px;
        height: 50px;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        @media screen and (max-width: 960px) {
          height: 32px;
          line-height: 16px;
        }
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
