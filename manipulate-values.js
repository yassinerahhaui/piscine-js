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
const reduceValues = (obj, func) => {
    if (obj.length < 1 || obj === undefined) {
        throw new Error('Object error: Cannot reduce an empty Object!');
    }
    let firstkey = Object.keys(obj)[0]
    let result = obj[firstkey]
    for (let [key, val] of Object.entries(obj)) {
        if (key !== firstkey) {
            result = func(result, val, key, obj)
        }
    }
    return result
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))