<template>
  <div class="banner"><img src="../assets/banner.jpg"></div>
  <div class="search-field">
    <div class="input-field col s3">
      <input id="search" type="text" class="validate">
      <label for="search">搜索内容</label>
    </div>
    <button class="btn waves-effect waves-light" type="submit" name="action">搜索</button>
  </div>
</template>

<style lang="less">

.banner {
  img {
    width: 100%;
    height: 200px;
  }
}

.search-field {
  width: 200px;
  margin: 0 auto;
  .input-field, button {
    display: inline-block;
  }
}

</style>

<script>
export default {
  name: 'welcome',
  methods: {

  }
}
</script>
