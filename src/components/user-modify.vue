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
              <input type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="type">
            <label>手机</label>
          </div>
          <div class="input-field col s12">
            <input value="" type="text" class="validate" v-model="place">
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
</template>

<style lang="less">

</style>

<script>
export default {
  name: 'homepage',
  methods: {

  }
}
</script>
