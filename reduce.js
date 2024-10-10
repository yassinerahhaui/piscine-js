const fold = (arr = [], func, init = 0) => {
    let total = init
    for (let i = 0; i < arr.length; i++) {
        total = func(total, arr[i], i, arr)
    }
    return total
}
const foldRight = (arr = [], func, init = 0) => {
    let total
    let start = arr.length - 1
    if (init !== undefined) {
        total = init;
    } else if (arr.length > 0) {
        total = arr[start];
        start--;
    } else {
        return undefined;
    }
    for (let i = start; i >= 0; i--) {
        total = func(total, arr[i], i, arr)
    }
    return total
}

const reduce = (arr = [], func) => {
    let total = arr[0] || []
    for (let i = 1; i < arr.length; i++) {
        total = func(total, arr[i], i, arr)
    }
    return total
}
const reduceRight = (arr = [], func) => {
    if (arr.length < 1 && init === undefined) {
        throw new Error('Array error: Cannot reduce an empty array!');
    }
    for (let i = arr.length; i >= 0; i--) {
        total = func(total, arr[i], i, arr);
    }
    return total;
}

// const adder = (a, b) => a + b
// console.log(fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3)
// console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1)
// console.log(reduce([1, 2, 3], adder)) // returns 6 (1 + 2 + 3)
// console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1)