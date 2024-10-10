const fold = (arr = [], func, init = 0) => {
    let total = init
    for (let i = 0; i < arr.length; i++) {
        total = func(total, arr[i], i, arr)
    }
    return total
}
const foldRight = (arr = [], func, init = 0) => {
    let total = init
    let start = arr.length - 2
    init === 0 ? total = arr[0] : start = arr.length - 2
    for (let i = start; i > 0; i--) {
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
    let total = arr[arr.length - 1] || []
    for (let i = arr.length - 2; i > 0; i--) {
        total = func(total, arr[i], i, arr)
    }
    return total
}

// const arr = [1,2,3]

// console.log(foldRight([],(t,i)=> {return t+i}));