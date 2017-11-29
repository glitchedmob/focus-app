<template lang="pug">
.container
	options-nav
	.block-site
		input(type="text" v-model="siteInput" @keyup.enter="blockSite()")
		button.btn.btn-primary(@click="blockSite()") Block Site
	.site-list
		blocked-site(v-for="site in sites" :site="site" :key="site" @delete="unblockSite(site)")

</template>

<script lang="ts">
import Vue from 'vue';

import Nav from './Nav.vue';
import BlockedSite from './BlockedSite.vue';

import { Storage } from '../extension';

export default Vue.extend({

	data() {
		return {
			siteInput: '',
			sites: <any>[]
		}
	},

	created() {
		Storage.get('sites', 'sync')
			.then(sites => this.sites = sites);
	},

	methods: {
		blockSite()	{
			this.sites.unshift(this.siteInput)
			Storage.set('sites', this.sites, 'sync');
			this.siteInput = '';
		},

		unblockSite(site: string)	{
			const siteIndex = this.sites.indexOf(site);

			if(siteIndex > -1)
			{
				this.sites.splice(siteIndex, 1)
			}
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
