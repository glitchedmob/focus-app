export interface PersistantStorage
{
	set(key: string, value: any, storageType?: string): Promise<any>;

	get(key: string, storageType?: string): Promise<any>;
}
