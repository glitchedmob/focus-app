// import { ChromeStorage } from './ChromeStorage';
// import { PersistantStorage } from './PersistantStorage';
// export class Store
// {
// 	public persistantStorageLoaded = false;

// 	private inMemoryStore = {} as any;

// 	constructor(private persistantStorage: PersistantStorage)
// 	{
// 		this.set('focused', false);
// 	}

// 	/**
// 	 * Stores a value in memory based
// 	 * @param key key to access value later
// 	 * @param value value to store
// 	 */
// 	public set(key: string, value: any): void
// 	{
// 		this.inMemoryStore[key] = value;
// 	}

// 	/**
// 	 * Retrieves value from in memory store
// 	 * @param key key of value to access
// 	 */
// 	public get(key: string): any
// 	{
// 		return this.inMemoryStore[key];
// 	}

// 	/**
// 	 * Stores a value to persistant browser storage
// 	 * @param key key to access value later
// 	 * @param value value to store
// 	 * @param storageType optional storage type, can be local or sync
// 	 */
// 	public setPersistant(key: string, value: any, storageType = 'local'): Promise<any>
// 	{
// 		return this.persistantStorage.set(key, value, storageType);
// 	}

// 	/**
// 	 * Retrives a value from persistant browser storage
// 	 * @param key key of value to access
// 	 * @param storageType optinal storage type, can be local or sync
// 	 */
// 	public getPersistant(key: string, storageType = 'local'): Promise<any>
// 	{
// 		return this.persistantStorage.get(key, storageType);
// 	}
// }
