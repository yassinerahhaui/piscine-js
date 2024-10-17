const writeTitle = (e) => {
	const title = document.getElementById("title")
	console.log('jjjjjj');
	// title.textContent = e.target.value()
	
}

const debounce = (func, wait) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this,args)
		}, wait)
	}
}

const opDebounce = (func, wait, options = { leading: true }) => {
	let {leading} = options
	return (...args) => {
		if (leading) {
			debounce(func,wait)
		} else {
			func.apply(this,args)
		}
	}
}