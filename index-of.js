const indexOf = (arr, value, index = 0) => {
    let i = 0
    for (let item of arr) {
        if (i >= index) {
            // i = 0; index = -1;
            if (item === value) return i;
        }
        i++
    }
    return -1
}

const lastIndexOf = (arr, value, start = 0) => {
    let index = -1;
    let count = 0
    for (let item of arr) {
        // if (count > start) return index
        if (item === value) index = count
        count++
    }
    return index
}

const includes = (arr, value) => {
    for (let item of arr) {
        if (item === value) return true
    }
    return false
}

console.log(indexOf(["hi", "hello", "10", "2", "10"], "10", 0));
// console.log(lastIndexOf(["hi","hello", "10", "2", "10"],"10"));
// console.log(includes(["hi","hello", "10", "2", "10"],"102"));