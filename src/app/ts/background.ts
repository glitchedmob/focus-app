import { SiteBlocking } from './background/SiteBlocking';

import { Storage } from './extension';

class Background {
	constructor() {
		this.initializeApp();
		new SiteBlocking();
	}

	private initializeApp() {
		chrome.runtime.onInstalled.addListener(details => {
			if (details.reason === 'install') {
				this.setInitialStorage();
			}
		});
	}

	private setInitialStorage() {
		Storage.get('focused')
			.catch(() => {Storage.set('focused', false); });
		Storage.get('sites', 'sync')
			.catch(() => {Storage.set('sites', [], 'sync'); });
	}
}

new Background();
