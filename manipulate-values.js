const filterValues = (obj, func) => {
    const result = {}
    for (let [key, val] of Object.entries(obj)) {
        if (func(val,key, obj)) {
            result[key] = val
        }
    }
    return result
}
const mapValues = (obj, func) => {
    const result = {}
    for (let [key, val] of Object.entries(obj)) {
        result[key] = func(val,key,obj)
    }
    return result
}
const reduceValues = (obj, func, init) => {
    let firstkey = Object.keys(obj)[0]
    let result = init || obj[firstkey]
    for (let [key, val] of Object.entries(obj)) {
        if (!init && key === firstkey) {
            continue
        }
        result = func(result, val, key, obj)
    }
    return result
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3));