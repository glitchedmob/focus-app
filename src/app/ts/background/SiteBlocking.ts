import { Storage } from '../extension';

export class SiteBlocking {
	private focused: null | boolean = null;
	private sites: null | any[] = null;
	private blockUrl = `${chrome.extension.getURL('index.html')}#/block`;

	constructor() {
		this.updateDataFromStorage();
		this.addEvents();
	}

	private updateDataFromStorage() {
		Storage.get('focused')
			.then((value: boolean) => this.focused = value);
		Storage.get('sites', 'sync')
			.then((value: any) => this.sites = value);
	}

	private addEvents() {
		chrome.storage.onChanged.addListener(this.updateDataFromStorage.bind(this));

		chrome.webRequest.onBeforeRequest.addListener(
			this.checkRequest.bind(this),
			{ urls: ['<all_urls>'] },
			['blocking']
		);
	}

	private checkRequest(requestDetails: any) {
		const returnObj = { cancel: false };

		if (
			this.focused === null ||
			this.sites === null ||
			!this.focused ||
			requestDetails.tabId === -1
		) return returnObj;

		chrome.tabs.get(requestDetails.tabId, (tab) => {
			if (this.blockSite(tab.url as string)) {
				this.updateTab(requestDetails.tabId);
			}
		});

		return returnObj;
	}

	private updateTab(tabId: number) {
		if (tabId === -1) return;

		chrome.tabs.update(tabId, {url: this.blockUrl});
	}

	private blockSite(url: string): boolean	{
		let block = false;

		for (const site of (this.sites as any[])) {
			const regPattern = new RegExp('^https?:\/\/www\.' + site + '|^https?:\/\/' + site, 'g');
			const matched = regPattern.test(url);
			if (matched) {
				block = true;
				break;
			}
		}

		return block;
	}
}
