<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s4"><a class="active" href="#test1">待审核用户</a></li>
        <li class="tab col s4"><a href="#test2">已通过用户</a></li>
        <li class="tab col s4"><a href="#test3">已拒绝用户</a></li>
      </ul>
    </div>
    <div id="test1" class="single col s12">
      <ul class="collection">
        <li class="collection-item avatar">
          <img src="../assets/huaji.jpg" alt="" class="icon">
          <span class="username">User1</span>
          <span class="right-btn">
            <a class="waves-effect waves-light btn">通过</a>
            <a class="waves-effect waves-light btn">拒绝</a>
          </span>
        </li>
        <li class="collection-item avatar">
          <img src="../assets/huaji.jpg" alt="" class="icon">
          <span class="username">User2</span>
          <span class="right-btn">
            <a class="waves-effect waves-light btn">通过</a>
            <a class="waves-effect waves-light btn">拒绝</a>
          </span>
        </li>
        <li class="collection-item avatar">
          <img src="../assets/huaji.jpg" alt="" class="icon">
          <span class="username">User3</span>
          <span class="right-btn">
            <a class="waves-effect waves-light btn">通过</a>
            <a class="waves-effect waves-light btn">拒绝</a>
          </span>
        </li>
        <li class="collection-item avatar">
          <img src="../assets/huaji.jpg" alt="" class="icon">
          <span class="username">User4</span>
          <span class="right-btn">
            <a class="waves-effect waves-light btn">通过</a>
            <a class="waves-effect waves-light btn">拒绝</a>
          </span>
        </li>
      </ul>
    </div>
    <div id="test2" class="single col s12">
      <ul class="collection">
        <li class="collection-item avatar">
          <img src="../assets/huaji.jpg" alt="" class="icon">
          <span class="username">User1</span>
        </li>
        <li class="collection-item avatar">
          <img src="../assets/huaji.jpg" alt="" class="icon">
          <span class="username">User2</span>
        </li>
      </ul>
    </div>
    <div id="test3" class="single col s12">
      <ul class="collection">
        <li class="collection-item avatar">
          <img src="../assets/huaji.jpg" alt="" class="icon">
          <span class="username">User1</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">

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

</style>
