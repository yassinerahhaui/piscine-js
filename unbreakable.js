const split = (str, sep) => {
    let result = []
    let start = 0
    let ln = sep.length
    for (let i = 0; i <= str.length; i++) {
        let item = str.slice(i, i + ln)
        if (item === sep || i === str.length) {
            let res = str.slice(start, i)
            result = [...result, res]
            start = i + ln
            i = start -1
        }
    }
    return result
}
const join = (arr, sep) => {
    let result = ""
    let index = 1
    for (let item of arr) {
        index < arr.length ? result += item + sep : result += item
        index++
    }
    return result
}
console.log(split('rrirr', 'rr'));
console.log(split('ggg - ddd - b', ' - '));
console.log(split("a,q,s,x",","));
console.log(split('a b c', ' '));
console.log(split('rrrr', 'rr'));
console.log(split('ee,ff,g,', ','));