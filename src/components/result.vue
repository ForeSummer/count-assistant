<template>
<div id="result" class="container">
  <div class="title">
    <p id="main">统计结果</p>
  </div>
  <div>
    <div class="ui blue labels">
      <a class="ui label">总金额 <div class="detail">{{account}}</div></a>
      <a class="ui label">总参加人数 <div class="detail">{{userAmount}}</div></a>
    </div>
  </div>
  <div class="ui middle aligned divided list">
    <h4 class="ui dividing header">分商品数量统计</h4>
    <div class="item single" v-for="item in items">
      <div class="content item">
        <div class="ui labeled input">
          <div class="ui label">品名</div>
          <input type="text" v-model="item.name">
        </div>
        <div class="ui labeled input">
          <div class="ui label">¥</div>
          <input type="text" v-model="item.price">
        </div>
        <div class="ui labeled input">
          <div class="ui label">数量</div>
          <input type="text" v-model="item.amount" number>
        </div>
      </div>
    </div>
  </div>
  <div class="ui middle aligned divided list">
    <h4 class="ui dividing header">分商品购买者统计</h4>
    <div class="field select">
      <label>选择商品条目</label>
      <select class="ui fluid dropdown" v-model="chooseIndex">
        <template v-for="item in items">
          <option value="{{$index}}">{{item.name}}</option>
        </template>
      </select>
    </div>
    <div class="item single" v-for="user in focusItem">
      <div class="content item">
        <div class="ui labeled input">
          <div class="ui label">姓名</div>
          <input type="text" v-model="user.name" >
        </div>
        <div class="ui labeled input">
          <div class="ui label">宿舍</div>
          <input type="text" v-model="user.address" >
        </div>
        <div class="ui labeled input">
          <div class="ui label">联系方式</div>
          <input type="text" v-model="user.mobile" >
        </div>
        <a class="ui teal tag label">{{user.choose[chooseIndex]}}</a>
      </div>
    </div>
  </div>
  <div class="next">
    <div class="ui button blue" v-link="{ path: '/' }">返回</div>
  </div>
</div>
</template>

<style lang="less">
#result {
  padding-top: 30px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 20px;
  .title {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 10px;
    #main {
      color: #43A047;
      font-size: 30px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    #sub {
      font-size: 16px;
    }
  }
  .form {
    
    margin-bottom: 20px;
    a {
      pointer-events: none;
      cursor: default;
      margin-bottom: 10px;
    }
    .button {
      margin-left: 1%;
    }
    .select {
      margin-bottom: 100px;
    }
  }
  .single {
    padding-top: 7px;
    padding-bottom: 7px;
    border-top: none;
  }
  .labels {
    margin-bottom: 5px;
  }
  .next {
    text-align: center;
    margin-top: 10px;
    div {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
  
}
</style>

<script>

export default {
  name: 'result',
  data: function(){
    return {
      chooseIndex: null,
      focusItem: [],
      userAmount: 0,
      account: 0,
      itemsUser: []
    }
  },
  vuex: {
    getters: {
      items: state => state.items,
      users: state => state.customers
    }
  },
  ready: function(){
    this.userAmount = this.users.length;
    this.itemsUser = [];
    for(var i = 0; i < this.items.length; i ++) {
      this.itemsUser.push([]);
      this.items[i].amount = 0;
    }
    for(var j = 0; j < this.users.length; j ++){
      var chooseArray = [];
      for(var i = 0; i < this.items.length; i ++) {
        chooseArray.push(null);
      }
      for(var i = 0; i < this.users[j].choose.length; i ++) {
        if(chooseArray[this.users[j].choose[i].index] == null) {
          chooseArray[this.users[j].choose[i].index] = this.users[j].choose[i].amount;
        }
        else {
          chooseArray[this.users[j].choose[i].index] += this.users[j].choose[i].amount;
        }
      }
      this.users[j].choose = chooseArray;
    }
    for(var i = 0; i < this.users.length; i ++) {
      this.account += this.users[i].prices;
      for(var j = 0; j < this.items.length; j++) {
        if(this.users[i].choose[j] != null) {
          this.itemsUser[j].push(this.users[i]);
          this.items[j].amount += this.users[i].choose[j];
        }
      }
    }
    console.log(this.itemsUser);
  },
  watch: {
    chooseIndex(index) {
      this.focusItem = this.itemsUser[index];
      console.log(this.focusItem);
    }
  },
  methods: {
    
  }
}

</script>