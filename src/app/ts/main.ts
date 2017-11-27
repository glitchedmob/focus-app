import Vue from 'vue';
import App from './components/App.vue';
import router from './router';

new Vue({
	el: '#focus-app',
	router,
	render: (h: any) => h(App)
});
