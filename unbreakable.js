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
    return item
}
const split = (str, sep) => {
    let result = []
    let end = 0
    let start = 0 
    for (let i = 0; i < str.length - (sep.length-1); i++) {
        end = i + sep.length
        if (slice(str, i, end) === sep) {
            result = [...result, slice(str,i-1,end)]
            item = ""
        }
        start = i
    }
    result = [...result, slice(str,start,end)]
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
// console.log(split('a b c', ' '));