const map = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let item = func(arr[i], i, arr)
        res.push(item)
    }
    return res
}

const flat = (arr, num=1) => {
    if(!Array.isArray(arr) || num === 0) {
        return arr
    }
    return arr.reduce((res, next) => {
        return res.concat(flat(next, num - 1));
    }, []);
}
// const arr = [1,2,3,4]
// console.log(map(arr, (i)=> i+1));
const flatMap = (arr, func) => {
    let newarr = flat(arr)
    return map(newarr, func)
}

console.log(flatMap([[1,2],[3,4],[5,6]], (i) => i+1));