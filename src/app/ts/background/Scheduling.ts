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
		console.log('hello');
	}

	private createAlarms() {
		console.log('alarms');
	}

}
