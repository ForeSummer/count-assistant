<template>
	<div class="title">items</div>
</template>

<style lang="less"></style>

<script>

export default {
	name: 'items',
	data: function(){
		return {}
	},
	ready: function(){
		console.log(this.$store._mutations._addItem('123'));
		console.log(this.$store._mutations._getItems());
		console.log('ready');
	}
}

</script>