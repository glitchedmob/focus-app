import { Scheduling } from './background/Scheduling';
import { SiteBlocking } from './background/SiteBlocking';

import { Storage } from './extension';

class Background {
	constructor() {
		this.initializeApp();
		new SiteBlocking();
		new Scheduling();
	}

	private initializeApp() {
		chrome.runtime.onInstalled.addListener(details => {
			if (details.reason === 'install') {
				this.setInitialStorage();
			}
		});
	}

	private setInitialStorage() {
		Storage.set('focused', false);
		Storage.set('sites', []);
		Storage.set('schedule', {});
	}
}

new Background();
