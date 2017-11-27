import Vue from 'vue';
import Router from 'vue-router';
import Popup from './../components/Popup.vue';
import Schedule from './../components/Schedule.vue';
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
			path: '/options/sites',
			name: 'sites',
			component: Sites
		},
		{
			path: '/options/schedule',
			name: 'schedule',
			component: Schedule
		}
	]
});
