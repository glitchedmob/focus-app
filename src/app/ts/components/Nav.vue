<template lang="pug">
	nav
		#logo
			img(src="../../images/focus-app.png")
			h1 ocus
		router-link.btn(:class="sitesClass" :to="{ name: 'sites' }")
			span Blocked Sites
		router-link.btn(:class="scheduleClass" :to="{ name: 'schedule' }")
			span Schedule
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

	computed: {
		sitesClass(): string
		{
			return this.$route.name === 'sites' ? 'btn-primary' : 'btn-primary-outline';
		},

		scheduleClass(): string
		{
			return this.$route.name === 'schedule' ? 'btn-primary' : 'btn-primary-outline';
		}
	}
});
</script>

<style lang="stylus" scoped>
nav
	padding 15px 0
	display flex
	align-items center
	margin-left 15px

	& > *
		margin-right 30px

	& .btn
		text-align center
		width 150px

#logo
	display flex
	align-items center

	img
		height 80px

	h1
		font-size 50px
		margin 0
		color transparent
		text-shadow 0 0 8px rgba(0,0,0,0.5)
</style>


