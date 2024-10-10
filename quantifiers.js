const every = (arr, func) => {
    for (let el of arr) {
        if (!func(el)) return false
    }
    return true
}
const some = (arr, func) => {
    for (let el of arr) {
        if (func(el)) return true
    }
    return false
}
const none = (arr, func) => {
    for (let el of arr) {
        if (func(el)) return false
    }
    return true
}