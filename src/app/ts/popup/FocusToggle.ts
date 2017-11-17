import { $on, qs } from '../helpers';
import { Store } from './../store';
/**
 * Manages the focus toggle in the popup
 */
export class FocusToggle
{
	private toggleCheckbox: HTMLInputElement;
	private titleEl: Element;
	private focused = false;
	private store: Store;

	constructor(store: Store)
	{
		this.store = store;

		this.store.get('focused').then(this.updateToggle.bind(this));

		// Chache main HTML elements in popup
		this.titleEl = qs('#title');
		this.toggleCheckbox = qs('#focus-state') as HTMLInputElement;

		// Attache click event listener
		$on(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));
	}

	private updateToggle(data: any)
	{
		this.focused = (data.focused === 'true');
		this.toggleCheckbox.checked = this.focused;
		this.titleEl.className = this.focused ? 'focused' : '';
		// Update chrome icon
		chrome.browserAction.setIcon({
			path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
		});
	}

	// Toggles the focused class based on
	// the state of the focused property
	private toggleFocus(): void
	{

		// Updatee internal focused state
		this.focused = !this.focused;

		this.store.set('focused', this.focused);
		// Update css class
		this.titleEl.className = this.focused ? 'focused' : '';

		// Update chrome icon
		chrome.browserAction.setIcon({
			path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
		});
	}
}
