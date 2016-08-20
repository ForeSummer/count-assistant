<template>
<div id="items" class="container">
	<div class="title">items</div>
	<div class="ui form">
		<div class="field">
			<label>添加一件商品</label>
			<div class="two fields">
				<div class="field">
					<input type="text" name="item-name" placeholder="请输入品名" v-model="item.name" >
				</div>
				<div class="field">
					<div class="ui right labeled input">
						<div class="ui label">¥</div>
						<input type="text" name="item-price" placeholder="请输入单价" v-model="item.price">
					</div>
				</div>
			</div>
		</div>
		<div class="ui button" v-on:click="addItem()">Add Item</div>
	</div>
	<div class="ui middle aligned divided list">
		<div class="item" v-for="item in items">
			<div class="right floated content">
				<div class="ui button" v-on:click="deleteItem($index)">Remove</div>
			</div>
			<div class="content item">
				<div class="ui labeled input">
					<div class="ui label">品名</div>
					<input type="text" v-model="item.name">
				</div>
				<div class="ui labeled input">
					<div class="ui label">¥</div>
					<input type="text" v-model="item.price">
				</div>
			</div>
		</div>
	</div>
	<div class="result">
		<template v-for="item in items">
			<div class="result-item">
				
			</div>
		</template>
	</div>
</div>
</template>

<style lang="less">
	
</style>

<script>

export default {
	name: 'items',
	data: function(){
		return {
			items: [],
			item: {
				'name': '',
				'price': ''
			}
		}
	},
	created: function() {
		this.items = this.$store._mutations._getItems();
		
	},
	ready: function(){
		
	},
	methods: {
		addItem: function(item){
			this.$store._mutations._addItem(this.item);
			//this.items.push(this.item);
			//this.items = this.$store._mutations._getItems();
			this.item = {
				'name': '',
				'price': ''
			};
			console.log(this.items);
		},
		deleteItem: function(index) {
			this.$store._mutations._deleteItem(index);
		}
	}
}

</script>