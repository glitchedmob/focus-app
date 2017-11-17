export class Store
{

	constructor()
	{
		this.set('focused', true);
	}

	public set(key: string, value: any, type = 'local'): Promise<any>
	{

		return new Promise((resolve, reject) => {
			if (type !== 'local' && type !== 'sync') return reject();

			chrome.storage[type].set({ [key]: JSON.stringify(value) }, () => {
				resolve('Saved successfully');
			});
		});
	}

	public get(key: string, type = 'local'): Promise<any>
	{

		return new Promise((resolve, reject) => {

			if (type !== 'local' && type !== 'sync') return reject();

			// Search chrome storage
			chrome.storage[type].get(key, (value: any) => {

				// Resolve only if we did get a value
				if (value) {
					resolve(value);
				} else {
					reject();
				}

			});

		});
	}
}
