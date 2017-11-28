// import { ChromeStorage } from './background/ChromeStorage';
// import { Store } from './background/Store';

// const persistantStorage = new ChromeStorage();
// const store = new Store(persistantStorage);

// (window as any).FocusApp = {
// 	store,
// };

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
// 	if (tab.url && tab.url.includes('facebook.com')) {
// 		chrome.tabs.update(tabId, {url : 'https://google.com'});
// 	}
// });

import { Storage } from './extension';

const blockUrl = chrome.extension.getURL('index.html');

let focused: null | boolean = null;
let sites: null | any = null;

Storage.get('focused')
	.then((value: boolean) => focused = value);
Storage.get('sites', 'sync')
	.then((value: any) => sites = value);

chrome.storage.onChanged.addListener((changes, namespace) => {
	Storage.get('focused')
		.then((value: boolean) => focused = value);
	Storage.get('sites', 'sync')
		.then((value: any) => sites = value);
});

chrome.webRequest.onBeforeRequest.addListener(
	(details) => {

		if (focused === null || !focused || sites === null) return {cancel: false};

		let block = false;

		for (const site of sites) {
			if (details.url.includes(site)) {
				block = true;
				break;
			}
		}

		if (block && details.tabId !== -1) {
			chrome.tabs.update(details.tabId, { url: `${blockUrl}#/block` });
		}

		return {cancel: block};
	},
	{urls: ['<all_urls>']},
	['blocking']
);
