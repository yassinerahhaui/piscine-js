const forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr)
    }
}

// forEach([1,2,3,4], (i)=> console.log(i))