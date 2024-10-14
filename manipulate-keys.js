const filterKeys = (obj, func) => {
    const result = {}
    for (let key of Object.keys(obj)) {
        if (func(key,obj[key],obj)) {
            result[key] = obj[key]
        }
    }
    return result
}
const mapKeys = (obj, func) => {
    const result = {}
    for (let [key,value] of Object.entries(obj)) {
        let newkey = func(key, value, obj)
        result[newkey] = value
    }
    return result
}
const reduceKeys = (obj, func, init) => {
    let result = init || Object.keys(obj)[0]
    for (let key of Object.keys(obj)){
        if (!init && key === Object.keys(obj)[0]) continue;
        result = func(result, key, obj[key], obj)
    }
    return result
}


// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// // output: carbohydrates, protein, fat