export class Icon
{
	public static set(path: string): void {
		chrome.browserAction.setIcon({ path });
	}
}
