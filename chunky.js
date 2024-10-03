const chunk = (arr, num) => {
    let count = 1
    let result = []
    let item = []
    for (let i of arr) {
        item.push(i)
        if (count % num === 0) {
            result.push(item)
            item = []
        }
        count++
    }
    if (item.length > 0) result.push(item);
    return result
}

// console.log(chunk([1,2,3,4,5,6,7,8,9],2));