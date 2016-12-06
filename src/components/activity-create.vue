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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less"></style>

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
    }
  },
  ready: function() {
    this.changeMainTitle('创建活动')

  }
}

</script>