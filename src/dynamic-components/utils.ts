export function insertAt<T>(arr: T[], index: number, element: T) {
    return [ ...arr.slice(0, index), element, ...arr.slice(index) ];
}

export function moveElement<T>(arr: T[], element: T, offset: number) {
    const array = [...arr];

    const fromIndex = arr.indexOf(element);
    if (fromIndex === -1) return array;

    const toIndex = Math.max(0, Math.min(arr.length - 1, fromIndex + offset));
    const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

		const [item] = array.splice(fromIndex, 1);
		array.splice(endIndex, 0, item);
	}

    return array;
}