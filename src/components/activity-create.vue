<template>
  <div class="create-container container">
    <div class="row">
      <h2>创建活动</h2>
    </div>
    <div class="progress row" v-show="isSubmiting">
      <div class="indeterminate"></div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <h5>活动信息</h5>
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
          <div class="file-field input-field col s12">
            <div class="btn">
              <span>活动海报</span>
              <input type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
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
          <div class="switch-field col s12">
            <div class="switch">
              <span class="tag">是否审核报名用户</span>
              <label>
                否 <input type="checkbox">
                <span class="lever"></span> 是
              </label>
            </div>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate date-picker" id="start-datepicker" v-model="startdate" data-fx-mobile="true" data-large-mode="true" data-large-default="true" data-max-year="2030" data-min-year="2016">
            <label>开始日期</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate time-picker" id="start-timepicker" v-model="starttime">
            <label>开始时间</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate date-picker" id="end-datepicker" v-model="enddate" data-fx-mobile="true" data-large-mode="true" data-large-default="true" data-max-year="2030" data-min-year="2016">
            <label>结束日期</label>
          </div>
          <div class="input-field col s6">
            <input value="" type="text" class="validate time-picker" id="end-timepicker" v-model="endtime">
            <label>结束时间</label>
          </div>
          <h5>主办单位信息</h5>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="hostName">
            <label>主办单位名称</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="hostPhone">
            <label>主办方联系方式</label>
          </div>
          <a class="waves-effect btn" v-on:click="submit()">Submit</a>
        </div>
      </div>
    </div>
    <div id="alert-modal" class="modal">
      <div class="modal-content">
        <h4>提示信息</h4>
        <p>{{modalmessage}}</p>
      </div>
      <div class="modal-footer">
        <a class=" modal-action modal-close waves-effect waves-green btn-flat">OK</a>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .picker {
    width:300px!important;
  }
  .switch-field {
    margin-bottom: 30px;
    .tag {
      margin-right: 20px;
    }
  }
</style>

<script>

import {
  
} from '../vuex/mutation-types'


import {
  changeMainTitle,
  getTimeStamp,
  getTimeString
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
      'starttime': ' ',
      'enddate': null,
      'endtime': ' ',
      'limit': '',

      'modalmessage': '',
      'isSubmiting': false
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
    $('.date-picker').dateDropper({})
    $('.time-picker').timeDropper({
      format: 'HH:mm'
    })
    this.starttime = '00:00'
    this.endtime = '00:00'
    $('#alert-modal').modal()
  },
  methods:{
    upLoadImg: function() {

    },
    submit: function() {
      if(!this.name) {
        this.modalmessage = '活动名称不能为空！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.place) {
        this.modalmessage = '活动地点不能为空！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.info) {
        this.modalmessage = '活动简介不能为空！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.description) {
        this.modalmessage = '活动描述不能为空！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.startdate) {
        this.modalmessage = '请选择活动开始日期！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.enddate) {
        this.modalmessage = '请选择活动结束日期！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.starttime || this.starttime == ' ') {
        this.modalmessage = '请选择活动开始时间！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.starttime || this.starttime == ' ') {
        this.modalmessage = '请选择活动结束时间！'
        $('#alert-modal').modal('open')
        return
      }
      let start = getTimeStamp(this.startdate, this.starttime)
      let end = getTimeStamp(this.enddate, this.endtime)
      let now = Date.now()
      if(start < now) {
        this.modalmessage = '活动开始时间不能早于当前时间！'
        $('#alert-modal').modal('open')
        return
      }
      if(end < start) {
        this.modalmessage = '活动结束时间应晚于活动开始时间！'
        $('#alert-modal').modal('open')
        return
      }
      this.isSubmiting = true
      this.createActivity({})
    }
  }
}

</script>