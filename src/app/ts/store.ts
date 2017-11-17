export class Store
{

	public set(key: string, value: any, type = 'local'): void
	{
		if (type !== 'local' && type !== 'sync') return;
		chrome.storage[type].set({ key: value });
	}

	public get(key: string, type = 'local'): Promise<any> | void
	{
		if (type !== 'local' && type !== 'sync') return;

		return new Promise((resolve, reject) => {

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
