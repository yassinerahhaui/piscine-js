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
    if (typeof item === "string") {
        return arr.join("")
    }
    return arr
}
const split = (str, sep) => {
    let result = []
    let item = ""
    for (let i = 0; i < str.length - sep.length; i++) {
        if (slice(str, i, i + sep.length) === sep) {
            result = [...result, item]
            item = ""
        } else {
            item += char
        }
    }
    item !== "" ? result = [...result, item] : ""
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