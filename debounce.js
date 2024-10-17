
const debounce = (func, wait) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this,args)
		}, wait)
	}
}

const opDebounce = (func, wait, options = { leading: false }) => {
	let {leading} = options
	return (...args) => {
		if (leading) {
			func.apply(this,args)
		} else {
			debounce(func(...args),wait)
		}
	}
}