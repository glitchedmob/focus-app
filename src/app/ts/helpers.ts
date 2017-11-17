/**
 * A wrapper for the querySelector method
 *
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
export function qs(selector: string, scope?: Element): Element
{
	return (scope || document).querySelector(selector) as Element;
}

/**
 * A wrapper for the querySelectorAll method
 *
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
export function qsa(selector: string, scope: Element)
{
	const elements = (scope || document).querySelectorAll(selector);
	const elementsArr = [];

	for (let i = 0; i < elements.length; i++) {
		elementsArr[i] = elements[i];
	}

	return elementsArr;
}

export function $on(target: Element|Window, type: string, callback: EventListenerOrEventListenerObject)
{
	target.addEventListener(type, callback);
}
