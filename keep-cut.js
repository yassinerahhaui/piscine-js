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

const cutFirst = (str) => slice(str, 2)
const cutLast = (str) => slice(str, 0, -2)
const cutFirstLast = (str) => slice(str,2,-2)
const keepFirst = (str) => slice(str,0,2)
const keepLast = (str) => slice(str,-2)
const keepFirstLast = (str) => {
    return str.length <= 4 ? str : slice(str,0, 2) + slice(str,-2)
}
// console.log(cutFirst("hello"));
// console.log(cutLast("hello"));
// console.log(cutFirstLast("hello"));
// console.log(keepFirst("hello"));
// console.log(keepLast("hello"));
// console.log(keepFirstLast("hello"));