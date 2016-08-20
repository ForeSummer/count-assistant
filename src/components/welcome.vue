<template>
	<div class="title">welcome</div>
	<a v-link="{ path: '/first' }">items</a>
	<a v-link="{ path: '/second' }">customer</a>
	<a v-link="{ path: '/result' }">result</a>
</template>

<style lang="less"></style>

<script>
export default {
	name: 'welcome',
	methods: {

	}
}
</script>