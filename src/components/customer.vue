<template>
<div id="items" class="container">
  <div class="title">
    <p id="main">Second Step</p>
    <p id="sub">输入或者上传文件导入同学选购信息</p>
  </div>
  <div class="ui form">
    <div class="field">
      <a class="ui teal tag label">点击按钮选择文件上传</a>
    </div>
    <div class="ui button" v-on:click="uploadFile()">上传文件</div>
  </div>
  <div class="ui form">
    <div class="field">
      <a class="ui teal tag label">添加一位同学</a>
      <div class="three fields">
        <div class="field">
          <input type="text" name="user-name" placeholder="姓名" v-model="user.name" v-on:keyup.enter="addUser">
        </div>
        <div class="field">
          <input type="text" name="user-address" placeholder="宿舍" v-model="user.address" v-on:keyup.enter="addUser">
        </div>
        <div class="field">
          <input type="text" name="user-mobile" placeholder="联系方式" v-model="user.mobile" v-on:keyup.enter="addUser">
        </div>
      </div>
    </div>
    <div class="ui button" v-on:click="addUser()">Add User</div>
  </div>
  <div class="ui form">
    <div class="field">
      <a class="ui teal tag label">编辑／查看 选购详情</a>
      <h4 class="ui dividing header">选择一名同学</h4>
      <div class="field">
        <select class="ui fluid dropdown" v-model="chooseIndex">
          <template v-for="user in users">
            <option value="{{$index}}">{{user.name}}</option>
          </template>
        </select>
      </div>
      <h4 class="ui dividing header">编辑选购详情</h4>
      <div class="two fields">
        <div class="field">
          <select class="ui fluid dropdown" v-model="choose.index">
          <template v-for="item in items">
            <option value="{{$index}}">{{item.name}}</option>
          </template>
        </select>
        </div>
        <div class="field">
          <input type="text" name="user-address" placeholder="数量" v-model="choose.amount" number v-on:keyup.enter="addItem">
        </div>
      </div>
      <div class="ui button" v-on:click="addItem()">增加选购信息</div>
      <h4 class="ui dividing header">选购详情</h4>
      <div class="ui middle aligned divided list">
        <div class="item single" v-for="item in chooses">
          <div class="right floated content">
            <div class="ui button red" v-on:click="deleteItem($index)">Remove</div>
          </div>
          <div class="two fields">
            <div class="field">
              <div class="ui labeled input">
                <div class="ui label">品名</div>
                <input type="text" v-model="items[item.index].name">
              </div>
            </div>
            <div class="field">
              <div class="ui labeled input">
                <div class="ui label">数量</div>
                <input type="text" v-model="item.amount" number>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui blue labels">
        <a class="ui label">应付总价 <div class="detail">¥ {{prices}}</div></a>
      </div>
      <div class="ui button" v-on:click="saveItem">保存选购信息</div>
    </div>
    
  </div>
  <div class="ui middle aligned divided list">
    <div class="ui green labels">
      <a class="ui label">选购同学列表 <div class="detail">{{userLength}}</div></a>
    </div>
    <div class="item single" v-for="user in users">
      <div class="right floated content">
        <div class="ui button red" v-on:click="deleteUser($index)">Remove</div>
      </div>
      <div class="content item">
        <div class="ui labeled input">
          <div class="ui label">姓名</div>
          <input type="text" @input="updateUser($index)" v-model="user.name">
        </div>
        <div class="ui labeled input">
          <div class="ui label">宿舍</div>
          <input type="text" @input="updateUser($index)" v-model="user.address">
        </div>
        <div class="ui labeled input">
          <div class="ui label">联系方式</div>
          <input type="text" @input="updateUser($index)" v-model="user.mobile">
        </div>
      </div>
    </div>
  </div>
  <div class="next">
    <div class="ui button blue" v-link="{ path: '/' }">返回</div>
    <div class="ui button green" v-link="{ path: '/first' }">上一步</div>
    <div class="ui button green" v-link="{ path: '/result' }">获取结果</div>
  </div>
</div>
</template>

<style lang="less">
#items {
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

  }
  .single {
    padding-top: 7px;
    padding-bottom: 7px;
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

import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  MODIFY_CUSTOMER
} from '../vuex/mutation-types'

export default {
  name: 'customer',
  data: function(){
    return {
      userLength: '',
      chooseIndex: null,
      prices: 0,
      choose : {
        'index': null,
        'amount': null
      },
      chooses: [],
      user: {
        'name': '',
        'address': '',
        'mobile': '',
        'prices': 0,
        'choose':[]
      }
    }
  },
  vuex: {
    getters: {
      items: state => state.items,
      users: state => state.customers
    },
    actions: {
      _addUser: ({dispatch}, user) => {
        dispatch(ADD_CUSTOMER, user)
      },
      _deleteUser: ({dispatch}, index) => {
        dispatch(DELETE_CUSTOMER, index)
      },
      _modifyUser: ({dispatch}, index, user) => {
        dispatch(MODIFY_CUSTOMER, index, user)
      }
    }
  },
  created: function() {
    this.userLength = this.users.length;
    this.chooses = [];
    this.prices = 0;
    this.chooseIndex = null;
  },
  ready: function(){
    this.userLength = this.users.length
    if(this.userLength != 0) {
      this.chooseIndex = 0
    }
  },
  watch: {
    chooseIndex(index) {
      console.log(index);
      this.chooses = this.users[index].choose;
      this.prices = this.users[index].prices;
    }
  },
  methods: {
    addUser: function(){
      if(this.user.name == '' || this.user.address == '' || this.user.mobile == '') {
        return;
      }
      this._addUser(this.user);
      if(this.users.length == 1) {
        this.chooseIndex = 0;
      }
      this.user = {
        'name': '',
        'address': '',
        'mobile': '',
        'prices': 0,
        'choose':[]
      };
      this.userLength ++;
    },
    deleteUser: function(index) {
      this._deleteUser(index);
      this.userLength --;
    },
    updateUser: function(index) {
      this._modifyUser(index, this.users[index])
    },
    addItem: function() {
      if(this.choose.index == null || this.choose.amount == '' || this.choose.amount == null) {
        return;
      }
      this.chooses.push(this.choose);
      this.prices += parseFloat(this.items[this.choose.index].price) * parseInt(this.choose.amount);
      this.choose = {
        'index': null,
        'amount': null
      };
    },
    deleteItem: function(index) {
      var chooseArray = this.chooses;
      if(index >= chooseArray.length) {
        return
      }
      this.prices -= parseFloat(this.items[chooseArray[index].index].price) * parseInt(chooseArray[index].amount);
      chooseArray.splice(index, 1);
    },
    saveItem: function() {
      this.users[this.chooseIndex].choose = this.chooses;
      this.users[this.chooseIndex].prices = this.prices;
      this.$store._mutations._modifyUser(this.chooseIndex, this.users[this.chooseIndex]);
    },
    uploadFile: function() {

    }
  }
}

</script>