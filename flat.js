const flat = (arr, num=1) => {
    if(!Array.isArray(arr) || num === 0) {
        return arr
    }
    return arr.reduce((res, next) => {
        return res.concat(flat(next, num - 1));
    }, []);
}
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(flat(arr2,3));