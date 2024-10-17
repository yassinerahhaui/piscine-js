
const debounce = (func, wait) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this,args)
		}, wait)
	}
}

const opDebounce = (func, wait, options = {leading : false}) => {
	let timeout;
	let called = false
	let {leading} = options
	return (...args) => {
		if (leading && !called) {func.apply(this,args);called = true}
		clearTimeout(timeout);
		timeout = setTimeout(()=> {
			if (!leading) func.apply(this,args);
			called = false
		},wait)
	}
}
