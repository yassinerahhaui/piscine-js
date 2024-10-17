const debounce = (func, wait) => {
	let timeout;
	return (...args) => {
		timeout = setTimeout(() => {
			clearTimeout(timeout);
			func(...args)
		}, wait)
	}
}
const opDebounce = (func, wait, leading = false) => {
	let timeout;
	return (...args) => {
		if (leading) {
			timeout = setTimeout(() => {
				clearTimeout(timeout);
				func(...args)
			}, wait)
		} else {
			func(...args)
		}
	}
}