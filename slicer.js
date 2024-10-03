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
console.log(slice('abcdef', -2));
console.log(slice('abcdef', 0, 2));