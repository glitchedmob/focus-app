import Vue from 'vue';
import App from './components/App.vue';
import router from './router';

new Vue({
	el: '#focus-app',
	router,
	render: (h: any) => h(App)
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	console.log(tabId);
	console.log(changeInfo);
	console.log(tab);
});
