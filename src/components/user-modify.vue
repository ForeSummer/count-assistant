<template>
  <div class="create-container container">
    <div class="row">
      <h2>修改个人信息</h2>
    </div>
    <div class="progress row hidden">
      <div class="indeterminate"></div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="name">
            <label>昵称</label>
          </div>
          <div class="file-field input-field col s12">
            <div class="btn">
              <span>头像</span>
              <input type="file" v-model="img">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="phone">
            <label>手机</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="email">
            <label>邮箱</label>
          </div>
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model="description"></textarea>
            <label>个人简介</label>
          </div>
          <a class="waves-effect waves-light btn" v-on:click="submit()">Submit</a>
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

</style>

<script>
export default {
  name: 'usrModify',
  components: {

  },
  data: function(){
    return {
      'name': '',
      'phone': '',
      'email': '',
      'description': '',
      'modalmessage': '',
    }
  },
  vuex: {
    getters: {
    },
    actions: {
      modifyUsrInfo: function({dispatch}, data) {

      },
    }
  },
  ready: function () {
    $('#alert-modal').modal()
  },
  methods: {
    submit: function () {
      if(!this.name) {
        this.modalmessage = '昵称不能为空！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.phone) {
        this.modalmessage = '手机不能为空！'
        $('#alert-modal').modal('open')
        return
      }
      else if(!this.email) {
        this.modalmessage = '邮箱不能为空！'
        $('#alert-modal').modal('open')
        return
      }
      this.modifyUsrInfo({
        'name': this.name,
        'phone': this.phone,
        'email': this.email,
        'description': this.description
      })
    }
  }
}
</script>
