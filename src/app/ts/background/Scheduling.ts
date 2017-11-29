import { Storage } from './../extension/Storage';

export class Scheduling {

	private schedule: null | any = null;

	constructor() {
		this.createAlarms();
		this.addEvents();
		this.updateDataFromStorage();
	}

	private updateDataFromStorage() {
		Storage.get('schedule')
			.then((value: boolean) => this.schedule = value);
	}

	private addEvents() {
		chrome.storage.onChanged.addListener(details => {
			console.log(details);
		});
	}

	private createAlarms() {
		console.log('alarms');
	}

}
