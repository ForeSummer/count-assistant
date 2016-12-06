<template>
  <div class="row">
      <div class="act-icon col s10 offset-s2 m3 offset-m2">
        <img class="act-image" src="../assets/huaji.jpg">
      </div>
      <div class="act-info col s12 m5">
        <div class="act-title">Title</div>
        <hr>
        <div class="act-time"><i class="fa fa-lg fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;活动时间: 
          <span id="act-time">2016-12-6</span>
        </div>
        <div class="act-place"><i class="fa fa-lg fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;活动地点: 
          <span id="act-place">412A</span>
        </div>
        <div class="act-detail"><i class="fa fa-lg fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;活动简介: 
          <span id="act-detail">一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话一长段话</span>
        </div>
        <hr>
        <div class="act-num">
          <span class="act-num-part">
            计划人数：
            <span id="act-total-num">4</span>
          </span>
          <span class="act-num-part">
            剩余人数：
            <span id="act-rest-num">4</span>
          </span>
        </div>
      </div>
    </div>
  
  
</template>

<style lang="less">

.row {
  margin-top: 20px;
  font-family: 'Microsoft Yahei', 'Hiragino Sans GB';
  font-size: 18px;
  .act-image {
    width: 250px;
    margin: 0 auto;
    @media screen and (max-width: 350px) {
      width: 200px;
    }
    @media screen and (max-width: 1000px) and (min-width: 700px) {
      width: 160px;
    }
  }
  .act-title {
    font-size: 26px;
    font-weight: bold;
  }
  .act-time {
    margin-top: 10px;
  }
  .act-place {
    margin-top: 10px;
  }
  .act-detail {
    margin-top: 10px;
  }
  .act-num {
    margin-top: 10px;
    .act-num-part {
      margin-right: 30px;
      background-color: #ccc;
      padding: 5px 15px 5px 15px;
      border-radius: 10px;
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
