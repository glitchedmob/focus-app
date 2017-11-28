export class Storage
{
	public static set(key: string, value: any, storageType = 'local'): Promise<any>
	{

		return new Promise((resolve, reject) => {
			if (storageType !== 'local' && storageType !== 'sync') return reject();

			if (!chrome) return reject();

			chrome.storage[storageType].set({ [key]: JSON.stringify(value) }, () => {
				resolve('Saved successfully');
			});
		});
	}

	public static get(key: string, storageType = 'local'): Promise<any>
	{

		return new Promise((resolve, reject) => {

			if (storageType !== 'local' && storageType !== 'sync') return reject();

			if (!chrome) return reject();

			// Search chrome storage
			chrome.storage[storageType].get(key, (value: any) => {

				// Resolve only if we did get a value
				if (Object.keys(value).length !== 0) {
					resolve(JSON.parse(value[key]));
				} else {
					reject();
				}

			});

		});
	}
}
