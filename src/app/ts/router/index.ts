import Vue from 'vue';
import Router from 'vue-router';

import Block from './../components/Block.vue';
import Popup from './../components/Popup.vue';
import Sites from './../components/Sites.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'popup',
			component: Popup
		},
		{
			path: '/block',
			component: Block
		},
		{
			path: '/options/sites',
			name: 'sites',
			component: Sites
		}
	]
});
