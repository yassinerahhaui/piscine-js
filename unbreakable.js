const slice = (item, start, end = item.length) => {
    if (start < 0) {
        start = -start
        start = item.length - start
    }
    if (end < 0) {
        end = -end
        end = item.length - end
    }
    // if (end === 0) end = item.length
    let arr = []
    for (let i = 0; i < item.length; i++) {
        i >= start && i < end ? arr.push(item[i]) : ''
    }
    let result = ""
    for (let item of arr) {
        result += item
    }
    // if (arr.length === 1) return arr[0]
    return result
}
const split = (str, sep) => {
    let result = []
    let start = 0
    let ln = sep.length
    for (let i = 0; i <= str.length; i++) {
        let item = slice(str, i, i + ln)
        if (item === sep || i === str.length) {
            let res = slice(str, start, i)
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