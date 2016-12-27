<template>
  <div class="user-container">
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s4"><a class="active" href="#test1">待审核用户</a></li>
          <li class="tab col s4"><a href="#test2">已通过用户</a></li>
          <li class="tab col s4"><a href="#test3">已拒绝用户</a></li>
        </ul>
      </div>
      <div id="test1" class="single col s12">
        <ul class="collection" v-for="user in act.waitingUser">
          <li class="collection-item avatar">
            <img src="../assets/huaji.jpg" alt="" class="icon">
            <span class="username">{{ user.nickname }}</span>
            <span class="right-btn">
              <a class="waves-effect waves-light btn">通过</a>
              <a class="waves-effect waves-light btn">拒绝</a>
            </span>
          </li>
        </ul>
      </div>
      <div id="test2" class="single col s12">
        <ul class="collection" v-for="user in act.passedUser">
          <li class="collection-item avatar">
            <img src="../assets/huaji.jpg" alt="" class="icon">
            <span class="username">{{ user.nickname }}</span>
          </li>
        </ul>
      </div>
      <div id="test3" class="single col s12">
        <ul class="collection" v-for="user in act.denyedUser">
          <li class="collection-item avatar">
            <img src="../assets/huaji.jpg" alt="" class="icon">
            <span class="username">{{ user.nickname }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less">

.user-container {
  .row {
    width: 50%;
    margin-top: 50px;
    margin-bottom: 50px;
    .collection {
      .collection-item {
        .icon {
          width: 50px;
          margin-top: 10px;
          margin-left: 10px;
          vertical-align:middle;
        }
        .username {
          font-size: 20px;
          font-weight: bold;
          padding-left: 50px;
        }
        .right-btn {
          float: right;
          margin-top: 10px;
        }
      }
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
        $.get('').done(function(res) {
          res = test_activity_detail;
          dispatch(ACT_SET_DETAIL, res);
        }).fail(function(res) {

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
