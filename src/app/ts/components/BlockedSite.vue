<template lang="pug">
	.site
		p {{ site }}
		button.btn.btn-danger.btn-circle(@click="$emit('delete')")
			span.close &times;
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

	props: ['site']
});
</script>

<style lang="stylus" scoped>
	@import '../../stylus/variables'
		
	.site
		width 100%
		display flex
		align-items center

		&:hover
			background-color $light-grey

		& > *
			margin 8px 10px

		p
			flex-grow 1
			font-size 20px
		
		button
			flex-grow 0
			
</style>


