import { ChromeStorage } from './background/ChromeStorage';
import { Store } from './background/Store';

const persistantStorage = new ChromeStorage();
const store = new Store(persistantStorage);

(window as any).FocusApp = {
	store,
};
