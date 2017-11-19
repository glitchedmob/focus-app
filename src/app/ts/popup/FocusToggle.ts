import { $on, qs } from '../helpers';
import { Store } from './../background/Store';
/**
 * Manages the focus toggle in the popup
 */
export class FocusToggle
{
	private toggleCheckbox: HTMLInputElement;
	private titleEl: Element;
	private focused = false;

	constructor(private store: Store)
	{
		this.store.get('focused').then(this.updateToggle.bind(this));

	}

	private updateToggle(data: any)
	{
		this.focused = (data.focused === 'true');


		qs('main').innerHTML = `
			<h1 id="title">Focus</h1>
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
				<button id="settings" class="btn btn-primary">Settings</button>
			</div>
		`;

		this.titleEl = qs('#title');

		this.toggleCheckbox = qs('#focus-state') as HTMLInputElement;

		// Attache click event listener
		$on(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));

		// this.toggleCheckbox.checked = this.focused;
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
