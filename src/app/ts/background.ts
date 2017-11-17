import { Store } from './store';

const store = new Store();

(window as any).focusApp = {
	store,
};
