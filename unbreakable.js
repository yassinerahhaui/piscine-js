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
    return arr
}
const split = (str, sep) => {
    let result = []
    let start = 0
    let ln = sep.length
    for (let i = 0; i + ln <= str.length; i++) {
        let item = slice(str, i, i + ln)
        if (item[0] === sep) {
            let res = slice(str, start, i)
            result = [...result, res[0]]
            start = i + ln
            item = ""
        }
    }
    let res = slice(str, start)
    result = [...result, res[0]]
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
// console.log(join(["1","1","1","1",],","));
// console.log(split("a,q,s,x",","));
console.log(split('a b c', ' '));