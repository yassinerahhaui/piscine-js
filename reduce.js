const fold = (arr = [], func, init = 0) => {
    let total = init
    for (let i = 0; i < arr.length; i++) {
        total = func(total, arr[i], i, arr)
    }
    return total
}
const foldRight = (arr = [], func, init = 0) => {
    arr.reverse()
    return fold(arr, func, init)
}
const reduce = (arr=[], func) => {
    let total = arr[0] || 0
    for (let i = 1; i < arr.length; i++) {
        total = func(total, arr[i], i, arr)
    }
    return total
}
const reduceRight = (arr=[], func) => {
    arr.reverse()
    return reduce(arr,func)
}

// const arr = [1,2,3]

// console.log(reduceRight(arr,(t,i)=> {return t+i}));