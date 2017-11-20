import { $on, qs } from '../helpers';
import { Store } from './../background/Store';
/**
 * Manages the focus toggle in the popup
 */
export class FocusToggle
{
	private toggleCheckbox: HTMLInputElement;
	private titleEl: Element;
	private focused: boolean;

	constructor(private store: Store)
	{
		// Retrieve focus state from store
		this.focused = this.store.get('focused');

		// Insert markup into popup using focus state modify several elements
		qs('main').innerHTML = `
			<h1 id="title" ${this.focused ? 'class="focused"' : ''}>Focus</h1>
			<div class="toggle-switch">
			<input id="focus-state" type="checkbox" class="toggle-checkbox"/ ${this.focused ? 'checked' : ''}>
			<label for="focus-state" class="toggle-viewport">
				<div class="toggle">
					<div class="toggle-button"></div>
					<div class="toggle-content toggle-left"><span>On</span></div>
					<div class="toggle-content toggle-right"><span>Off</span></div>
				</div>
			</label>
			</div>
			<div id="bottom-buttons">
				<button id="block-site" class="btn btn-danger">Block Site</button>
				<a href="options.html" target="_blank" id="settings" class="btn btn-primary">Settings</a>
			</div>
		`;

		// cache several elements from popup for us in event listeners
		this.titleEl = qs('#title');
		this.toggleCheckbox = qs('#focus-state') as HTMLInputElement;

		// Make sure that icon matches focus state
		chrome.browserAction.setIcon({
			path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
		});

		// Attache click event listener on toggle switch
		$on(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));
	}

	// Toggles the focused class based on
	// the state of the focused property
	private toggleFocus(): void
	{
		// Updatee internal focused state
		this.focused = !this.focused;
		// persist focus state outside of popup
		this.store.set('focused', this.focused);

		this.titleEl.className = this.focused ? 'focused' : '';

		// Update chrome icon
		chrome.browserAction.setIcon({
			path: this.focused ? '../images/icons/focus-app38.png' : '../images/icons/focus-app-red38.png',
		});
	}
}
