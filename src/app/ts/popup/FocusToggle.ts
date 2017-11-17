import 'chrome';
import { $on, qs } from '../helpers';

/**
 * Manages the focus toggle in the popup
 */
export class FocusToggle
{
	private toggleCheckbox: Element;
	private titleEl: Element;
	private focused = false;

	constructor()
	{
		// Chache main HTML elements in popup
		this.titleEl = qs('#title');
		this.toggleCheckbox = qs('#focus-state');

		// Attache click event listener
		$on(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));
	}

	// Toggles the focused class based on
	// the state of the focused property
	private toggleFocus(): void
	{
		// Updatee internal focused state
		this.focused = !this.focused;

		// Update css class
		this.titleEl.className = this.focused ? 'focused' : '';

		// Update chrome icon
		chrome.browserAction.setIcon({
			path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png'
		});
	}
}
