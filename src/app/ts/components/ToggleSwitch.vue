<template lang="pug">
.toggle-switch
	input.toggle-checkbox#focus-toggle(
		type="checkbox"
		:checked="checked"
		@change="emitCheckboxChange($event)")
	label.toggle-viewport(for="focus-toggle")
		.toggle
			.toggle-button
			.toggle-content.toggle-left
				span On
			.toggle-content.toggle-right
				span Off
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: ['checked'],
	methods: {
		emitCheckboxChange(event: Event): void
		{	
			console.log((event.target as HTMLInputElement).checked)
			this.$emit('input', (event.target as HTMLInputElement).checked)
		}
	}
});
</script>

<style lang="stylus" scoped>
$height = 50px
$width = 130px
$left-background = linear-gradient(360deg, #2B32B2 0%, #1488CC 101.35%)
$right-background = linear-gradient(180deg, #EB3349 0%, #F45C43 100%)
$toggle-background = #EEEEEE

.toggle-checkbox
	display none
	visibility none

.toggle,
.toggle-button,
.toggle-content
	transition all 300ms ease-in-out

.toggle-viewport
	border-radius ($height / 2)
	display block
	height $height
	overflow hidden
	width $width
	position relative
	margin 0 auto 0
	cursor pointer
	box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)

.toggle
	height 100%
	position relative
	width 200%

.toggle-button
	border-radius ($height / 2)
	box-sizing border-box
	background $toggle-background
	position absolute
	display block
	top 0
	height $height
	width $height
	cursor pointer

.toggle-content
	box-shadow rgba(0, 0, 0, 0.2) 0 0 5px inset
	cursor pointer
	display inline-block
	float left 
	height 100%
	width ($width - ($height / 2))
	font-size ($height / 2)
	font-weight bold
	text-transform uppercase
	top 10px
	user-select: none;
	color #FFF

	span
		text-shadow rgba(0, 0, 0, 0.1) 1px 1px 2px
		height 100%
		line-height $height
		margin 0 20px
		float left

.toggle-left
	background $left-background
	
.toggle-right
	background $right-background

	span
		float right

.toggle-checkbox
	
	&:checked + .toggle-viewport 

		> .toggle
			left 0

		.toggle-button
			left ($width - $height)

		.toggle-content
			width ($width - ($height / 2))
		
		.toggle-left
			margin-left 0
	
	font-size: 50px
	& + .toggle-viewport 

		> .toggle
			left -100%
	
		.toggle-button
			left $width
		
		.toggle-left
			margin-left $height
</style>
