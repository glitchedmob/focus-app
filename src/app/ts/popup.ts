import { FocusToggle } from './popup/FocusToggle';

const backgroundPage = chrome.extension.getBackgroundPage() as any;

new FocusToggle(backgroundPage.focusApp.store);
