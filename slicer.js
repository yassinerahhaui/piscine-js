const slice = (item, start, end = 0) => {
    if (start < 0) {
        start = -start
        start = item.length - start
    }
    if (end < 0) {
        end = -end
        end = item.length - end
    }
    if (end === 0) end = item.length - 1
    let arr = []
    for (let i = 0; i < item.length; i++) {
        i >= start && i <= end ? arr.push(item[i]) : ''
    }
    if (typeof item === "string") {
        return arr.join("")
    }
    return arr
}
console.log(slice('abcdef', -2));