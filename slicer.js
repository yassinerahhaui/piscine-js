const slice = (item, start, end = 0) => {
    try {
        if (typeof item != "string" && !Array.isArray(item)) throw "item not valid"
    } catch(err) {
        console.log(err);
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