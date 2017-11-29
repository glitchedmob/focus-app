import { Storage } from './../extension/Storage';

export class Scheduling {

	private schedule: null | any = null;
	private weekDays = [
		'sunday', 'monday', 'tuesday',
		'wednesday', 'thursday', 'friday', 'saturday'
	];

	constructor() {
		this.addEvents();
		this.updateDataFromStorage();
	}

	private updateDataFromStorage() {
		Storage.get('schedule')
			.then((value: boolean) => this.schedule = value);
	}

	private addEvents() {
		chrome.storage.onChanged.addListener(details => {
			if (!details.hasOwnProperty('schedule')) return;

			Storage.get('schedule', 'sync').then(schedule => {
				this.schedule = schedule;
				this.buildSchedule();
			});
		});
	}

	private buildSchedule() {
		this.clearAlarms();

		const today = new Date();

		let weekDay = this.getWeekDay(today);

		for (let i = 0; i < 6; i++) {
			if (this.schedule[weekDay].length === 0) {
				weekDay = this.nextWeekday(weekDay);
			} else {
				for (const time of this.schedule[weekDay]) {
					console.log(time);
				}
			}

		}

	}

	private nextWeekday(weekDay: string): string {
		const dayIndex = this.weekDays.indexOf(weekDay);

		if (dayIndex === 6) return this.weekDays[0];

		return this.weekDays[dayIndex + 1];
	}

	private getWeekDay(today: Date): string {
		return this.weekDays[today.getDay()];
	}

	private getTimeAMPM(today: Date): string {
		return today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	}

	private clearAlarms() {
		console.log('cleared');
	}

	private createAlarms(start: number, end: number) {
		console.log('alarms');
	}

}
