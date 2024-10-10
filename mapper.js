const map = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res = [...res,func(arr[i], i, arr)]
    }
    return res
}