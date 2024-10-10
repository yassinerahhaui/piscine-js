const filter = (arr,func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)) res.push(arr[i])
    }
    return res
}

const reject = (arr,func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i],i,arr)) res.push(arr[i])
    }
    return res
}

const partition = (arr, func) => { 
    let rej = reject(arr, func)
    let fil = filter(arr, func)
    return [fil, rej]
}


// const arr = [1,2,3,4,5,6,7,8,9]

// console.log(partition(arr,(i)=> (i < 5)));