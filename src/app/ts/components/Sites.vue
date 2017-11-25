<template lang="pug">
	.container
		options-nav
		.block-site-wrapper
			.block-site
				input(type="text" v-model="siteInput")
				button.btn.btn-primary(@click="sites.push(siteInput); siteInput = ''") Block Site
			.site-list
				ul
					li(v-for="site of sites")  {{ site }}

</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './Nav.vue';

export default Vue.extend({

	data() {
		return {
			siteInput: '',
			sites: [
				'https://facebook.com'
			]
		}
	},

	components: {
		'options-nav': Nav
	}
});
</script>

<style lang="stylus" scoped>

	.block-site
		display flex
		
		input
			padding 0 10px
			font-size 1.1rem
			margin-right 20px
			flex-grow 1
		
		button
			flex-grow 0
</style>


