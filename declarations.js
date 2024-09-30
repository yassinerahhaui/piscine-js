const escapeStr = "`\\/\"'"
const arr = [4, '2']
const obj = {
	str: "",
	num: 10,
	bool: true,
	undef: undefined
}
const arrVal = [4, undefined, '2']
const objVal = {
	str: "",
	num: 10,
	bool: true
}
const nested = {
	arr: arrVal,
	obj: objVal
	}

for (let [key,_] of Object.entries(nested)) {
	Object.freeze(nested[key])
}

