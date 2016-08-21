<template>
<div id="items" class="container">
	<div class="title">
		<p id="main">First Step</p>
		<p id="sub">输入或者上传文件导入商品信息</p>
	</div>
	<div class="ui form">
		<div class="field">
			<a class="ui teal tag label">点击按钮选择文件上传</a>
		</div>
		<div class="ui button" v-on:click="uploadFile()">上传文件</div>
	</div>
	<div class="ui form">
		<div class="field">
			<a class="ui teal tag label">添加一件商品信息</a>
			<div class="two fields">
				<div class="field">
					<input type="text" name="item-name" placeholder="请输入品名" v-model="item.name" v-on:keyup.enter="addItem">
				</div>
				<div class="field">
					<div class="ui right labeled input">
						<div class="ui label">¥</div>
						<input type="text" name="item-price" placeholder="请输入单价" v-model="item.price" number v-on:keyup.enter="addItem">
					</div>
				</div>
			</div>
		</div>
		<div class="ui button" v-on:click="addItem()">Add Item</div>
	</div>
	<div class="ui middle aligned divided list">
		<div class="ui blue labels">
			<a class="ui label">商品列表 <div class="detail">{{itemsLength}}</div></a>
		</div>
		<div class="item single" v-for="item in items">
			<div class="right floated content">
				<div class="ui button red" v-on:click="deleteItem($index)">Remove</div>
			</div>
			<div class="content item">
				<div class="ui labeled input">
					<div class="ui label">品名</div>
					<input type="text" v-model="item.name">
				</div>
				<div class="ui labeled input">
					<div class="ui label">¥</div>
					<input type="text" v-model="item.price" number>
				</div>
			</div>
		</div>
	</div>
	<div class="next">
		<div class="ui button blue" v-link="{ path: '/' }">返回</div>
		<div class="ui button green" v-link="{ path: '/second' }">下一步</div>
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

export default {
	name: 'items',
	data: function(){
		return {
			items: [],
			itemsLength: 0,
			item: {
				'name': '',
				'price': ''
			}
		}
	},
	created: function() {
		this.items = this.$store._mutations._getItems();
		this.itemsLength = this.items.length;
	},
	ready: function(){
		
	},
	methods: {
		addItem: function(){
			if(this.item.name == '' || this.item.price == '') {
				return;
			}
			this.$store._mutations._addItem(this.item);
			//this.items.push(this.item);
			//this.items = this.$store._mutations._getItems();
			this.item = {
				'name': '',
				'price': ''
			};
			this.itemsLength ++;
		},
		deleteItem: function(index) {
			this.$store._mutations._deleteItem(index);
			this.itemsLength --;
		},
		uploadFile: function() {

		}
	}
}

</script>