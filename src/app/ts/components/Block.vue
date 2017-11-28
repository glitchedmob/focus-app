<template lang="pug">
	.block
		.center
			h1 Hey! Not Right Now!
			p
				| You're trying to focus, remember?
				br
				| Let's try to get some work done.
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({

	});
</script>

<style lang="stylus" scoped>
	.block
		width 100vw
		height 100vh
		display flex
		justify-content center
		align-items center
		background linear-gradient(120.76deg, #2B32B2 0%, #1488CC 100%)
		color #FFF
		text-align center

	h1
		font-size 60px
	p
		font-size 30px
</style>
