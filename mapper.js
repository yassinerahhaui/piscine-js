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
const flatMap = (arr, func) => flat(map(arr, func))
// const arr1 = ["it's Sunny in", "", "California"];

// arr1.map((x) => x.split(" "));
// // [["it's","Sunny","in"],[""],["California"]]

// console.log(flatMap(arr1, (i) => i.split(" ")));