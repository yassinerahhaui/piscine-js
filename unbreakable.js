const split = (str, sep) => {
    let result = []
    let item = ""
    for (let char of str) {
        if (char === sep) {
            result = [...result,item]
            item = ""
        } else {
            item += char
        }
    }
    item !== "" ? result = [...result,item] : ""
    return result
}
const join = (arr, sep) => {
    let result = ""
    let index = 1
    for (let item of arr) {
        index < arr.length ? result += item + sep : result += item
        index++
    }
    return result
}
// console.log(join(["1","1","1","1",],","));
// console.log(split("a,q,s,x",","));