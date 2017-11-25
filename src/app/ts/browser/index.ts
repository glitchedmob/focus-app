import { Storage } from './Storage';

class Browser {
	public storage = new Storage();

	public setIcon(path: string): void {
		if (chrome) {
			chrome.browserAction.setIcon({ path });
		}
	}
}

export default new Browser();
