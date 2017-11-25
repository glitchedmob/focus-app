<template lang="pug">
	.container
		options-nav
		.block-site-wrapper
			.block-site
				input(type="text" v-model="siteInput")
				button.btn.btn-primary(@click="sites.push(siteInput); siteInput = ''") Block Site
			.site-list
				blocked-site(v-for="site in sites" :site="site" :key="site")

</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './Nav.vue';
import BlockedSite from './BlockedSite.vue';

export default Vue.extend({

	data() {
		return {
			siteInput: '',
			sites: [
				'https://facebook.com',
				'https://youtube.com'
			]
		}
	},

	components: {
		'options-nav': Nav,
		BlockedSite
	}
});
</script>

<style lang="stylus" scoped>

	.block-site
		display flex
		margin-bottom 10px
		
		input
			padding 0 10px
			font-size 20px
			margin-right 20px
			flex-grow 1
		
		button
			flex-grow 0
</style>


