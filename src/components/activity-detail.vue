<template>
  <div class="row">
    <div class="act-icon col s10 offset-s2 m3 offset-m2">
      <img class="act-image" src="../assets/huaji.jpg">
    </div>
    <div class="act-info col s12 m5">
      <div class="act-title">{{ act.title }}</div>
      <hr>
      <div class="act-time"><i class="fa fa-lg fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;活动时间: 
        <span id="act-time">{{ act.time }}</span>
      </div>
      <div class="act-place"><i class="fa fa-lg fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;活动地点: 
        <span id="act-place">{{ act.place }}</span>
      </div>
      <div class="act-brief"><i class="fa fa-lg fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;活动简介: 
        <span id="act-brief">{{ act.brief }}</span>
      </div>
      <hr>
      <div class="act-num">
        <span class="act-num-part">
          计划人数：
          <span id="act-total-num">{{ act.num }}</span>
        </span>
        <span class="act-num-part">
          剩余人数：
          <span id="act-remain-num">{{ act.remain }}</span>
        </span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col m8 offset-m2 s12 offset-s0">
      <hr>
      {{ act.info }}
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
  .act-brief {
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
import {
  test_activity_detail
} from './test' 

import {
  ACT_SET_DETAIL
} from '../vuex/mutation-types'

export default {
  name: 'activityDetail',
  vuex: {
    getters: {
      act: state => state.activity.data.currentAct,
    },
    actions: {
      getActDetail: function({dispatch}) {
        $.get('').success(function(res) {
          res = test_activity_detail;
          dispatch(ACT_SET_DETAIL, res);
        });
      }
    }
  },
  ready: function() {
    this.getActDetail();
  },
  methods: {
    getId: function() {
      return this.$route.params.id
    }
  }
}
</script>
