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
		Storage.get('focused')
			.catch(() => {Storage.set('focused', false); });
		Storage.get('sites', 'sync')
			.catch(() => {Storage.set('sites', [], 'sync'); });
		Storage.get('schedule', 'sync')
			.catch(() => {
				const schedule = {
					sunday: [],	monday: [],	tuesday: [],	wednesday: [],
					thursday: [],	friday: [],	saturday: []
				};

				Storage.set('schedule', schedule, 'sync');
			});
	}
}

new Background();
