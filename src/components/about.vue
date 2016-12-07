<template>
  <div class="banner"><img src="../assets/banner.jpg"></div>
  <div class="about">
    <div class="title">关于我们</div>
    <hr>
    <div class="content">
      <div class="subtitle">网站简介</div>
      会嘉网是慧聪网（股票代码：HK02280）投资的全球展会在线一站式服务平台，致力于打造最具价值的“互联网+会展”创新模式，成为全球展会的连接器。会嘉网目前在线发布的展会数量超3500个，为参展商和观众提供展会管理服务、展会现场服务、商旅服务等一系列参展综合服务，让全球展会的主办机构、参展商和专业观众能够通过互联网连接起来，让参展变得更简单、更高效、更有趣。
      <div class="subtitle">小组简介</div>
      "我们的组名不可能这么难起"小组是由清华大学软件学院软件41班的唐人杰、李俊杰和软件42班的卫国扬、陈钰帆组成的软件工程(3)课程作业小组，小组组成旨在更快更好地完成软工三的课程大作业。
    </div>
  </div>
</template>

<style lang="less">

.banner {
  @media screen and (min-width: 961px) {
    width: 960px;
    margin: 0 auto;
    img {
      width: 960px;
      height: 400px;
    }
  }
  @media screen and (max-width: 960px) {
    img {
      width: 100%;
      height: 200px;
    }
  }
}
.about {
  margin-top: 30px;
  font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
  .title {
    font-size: 2em;
    @media screen and (max-width: 960px) {
      font-size: 1.2em;
    }
    font-weight: bold;
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
  .content {
    color: #555;
    font-size: 1.2em;
    @media screen and (max-width: 960px) {
      padding-left: 20px;
      font-size: 1.0em;
    }
    .subtitle {
      font-size: 1.6em;
      font-weight: bold;
      color: #333;
      margin-top: 20px;
      margin-bottom: 20px;
      @media screen and (max-width: 960px) {
        font-size: 1.1em;
      }
    }
  }
}

</style>

<script>
export default {
  name: 'about',
  methods: {
    
  }
}
</script>
