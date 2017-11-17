import { qs, $on } from "../helpers";


export class FocusToggle
{
	toggleCheckbox: Element;
	titleEl: Element;
	focused = false;
	
	constructor()
	{
		this.titleEl = qs('#title')
		this.toggleCheckbox = qs('#focus-state');

		$on(this.toggleCheckbox, 'click', this.toggleFocus.bind(this));
	}

	// Toggles the focused class based on 
	// the state of the focused property
	toggleFocus(): void
	{
		this.focused = !this.focused;

		this.titleEl.className = this.focused ? 'focused' : '';
	}
}