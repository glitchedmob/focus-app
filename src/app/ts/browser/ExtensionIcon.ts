export class ExtensionIcon
{
	public static set(path: string): void {
		chrome.browserAction.setIcon({ path });
	}
}
