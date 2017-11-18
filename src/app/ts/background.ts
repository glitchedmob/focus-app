import { Store } from './background/store';

const store = new Store();

(window as any).focusApp = {
	store,
};
