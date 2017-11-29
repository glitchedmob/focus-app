<template lang="pug">
	.time
		p {{ time.start }}
		p {{ time.end }}
		button.btn.btn-danger.btn-circle(@click="$emit('delete')")
			span.close &times;
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: ['time']
});
</script>

<style lang="stylus" scoped>
@import '../../stylus/variables'
	
.time
	width 500px
	display flex
	align-items center
	margin 15px auto

	&:hover
		background-color $light-grey

p
	text-align center
	height 100%
	margin 0 10px
	font-size 20px
	border 2px solid #333
	flex 1 1 100%
	padding 10px 0

button
	flex 1 1 123px
</style>
