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
            <input value="" type="text" class="validate" v-model="name">
            <label>活动名称</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="type">
            <label>活动类型</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="place">
            <label>活动地点</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="limit">
            <label>活动人数上限(可不填)</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="info">
            <label>活动简介-用于主页简介</label>
          </div>
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model="description"></textarea>
            <label>活动详细描述</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate date-picker" id="start-datepicker" v-model="startdate" data-fx-mobile="true" data-large-mode="true" data-large-default="true">
            <label>开始日期</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate time-picker" id="start-timepicker" v-model="starttime">
            <label>开始时间</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate date-picker" id="end-datepicker" v-model="enddate" data-fx-mobile="true" data-large-mode="true" data-large-default="true">
            <label>结束日期</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate time-picker" id="end-timepicker" v-model="endtime">
            <label>结束时间</label>
          </div>
          <a class="waves-effect waves-light btn" v-on:click="submit()">Submit</a>
        </div>
      </div>
    </div>
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
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
  data: function(){
    return {
      'name': '',
      'place': '',
      'info': '',
      'type': '',
      'description': '',
      'startdate': null,
      'starttime': null,
      'enddate': null,
      'endtime': null,
      'limit': '',
    }
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
    //$('#start-timepicker').timeDropper()
    //$('#start-datepicker').dateDropper()
    $('.date-picker').dateDropper()
    $('.time-picker').timeDropper({
      format: 'HH:mm'
    })
    this.starttime = '00:00'
    this.endtime = '00:00'
    $('#modal1').modal()
    //$('#end-timepicker').timeDropper()
    //$('#end-datepicker').dateDropper()
  },
  methods:{
    upLoadImg: function() {

    },
    submit: function() {
      console.log('submit')
      $('#modal1').modal('open')
    }
  }
}

</script>