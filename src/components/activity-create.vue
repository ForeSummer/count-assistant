<template>
  <div class="create-container container">
    
    <div class="row">
      <h2>创建活动</h2>
    </div>
    <div class="progress row hidden">
      <div class="indeterminate"></div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="fa fa-folder prefix" aria-hidden="true"></i>
            <input value="" type="text" class="validate">
            <label>活动名称</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate">
            <label>活动地点</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate">
            <label>活动类型</label>
          </div>
          
          <div class="input-field col s12">
            <input value="" type="text" class="validate">
            <label>活动地点</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate">
            <label>活动简介-用于主页简介</label>
          </div>
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label>活动详细描述</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate" id="datepicker" data-fx-mobile="true" data-large-mode="true">
            <label>选择开始日期</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate" id="timepicker">
            <label>选择开始时间</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .picker {
    width:300px!important;
  }
</style>

<script>

import {
  
} from '../vuex/mutation-types'


import {
  changeMainTitle
} from '../vuex/actions'

export default {
  name: 'actCreate',
  components: {

  },
  vuex: {
    getters: {
      maintitle: state => state.main.data.title,

      
    },
    actions: {
      changeMainTitle,
      createActivity: function({dispatch}, data) {

      },
    }
  },
  ready: function() {
    this.changeMainTitle('创建活动')
    $('#timepicker').timeDropper()
    $('#datepicker').dateDropper()
    
  },
  methods:{
    upLoadImg: function() {

    },
  }
}

</script>