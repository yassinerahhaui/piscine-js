const superTypeOf = (arg) => {
    if (arg instanceof Map) {
        return 'Map'
    } else if (arg instanceof Set) {
        return 'Set'
    } else if (Array.isArray(arg)) {
        return 'Array'
    } else if (typeof arg === "string") {
        return 'String'
    } else if ((typeof arg === "number") || Number.isNaN(arg)) {
        return 'Number'
    } else if (arg === null) {
        return 'null'
    } else if (typeof arg === "undefined") {
        return 'undefined'
    } else if (typeof arg === "function") {
        return 'Function'
    } else if (typeof arg === "object") {
        return 'Object'
    }
}
const arrToSet = (arr) => {
    const result = new Set()
    arr.map(el=> result.add(el))
    return result
}
const arrToStr = (arr) => arr.join("")
const setToArr = (set) => {
    let n = 0
    const arr = []
    for (const v of set.values()) {
        arr[n] = v
        n++
    }
    return arr
};
const setToStr = (set) => setToArr(set).join("");
const strToArr = (str) => str.split("");
const strToSet = (str) => new Set(str.split(""));
const mapToObj = (m) => {
    const res = new Object()
    for (let [key, value] of m) {
        res[key] = value
        }
    return res
}
const objToArr = (obj) => Object.values(obj)
const objToMap = (obj) => {
    const res = new Map();
    for (let [key,value] of Object.entries(obj)) {
        res.set(key,value)
    }
    return res
}
const arrToObj = (arr) => {
    const obj = {}
    let num = 0
    arr.map(el => {
        obj[num] = el;
        num++
    })
    return obj
}
const strToObj = (str) => {
    const obj = {}
    let index = 0
    for (let item of str.split()) {
        obj[index] = item
        index++
    }
    return obj
}
console.log(setToStr(new Set([1, 4, 3])));