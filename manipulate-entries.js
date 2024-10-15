const filterEntries = (obj, func) => {
    const res = {}
    for (let [key, val] of Object.entries(obj)) {
        if (func([key, val])) {
            res[key] = val
        }
    }
    return res
}
const mapEntries = (obj, func) => {
    const result = {}
    for (let [key, val] of Object.entries(obj)) {
        [key,val] = func([key, val])
        result[key] = val
    }
    return result
}

const reduceEntries = (obj, func, init) => {
    let result = init
    const arr = Object.entries(obj)
    if (typeof init === 'undefined') {
        result = arr[0]
        arr = arr.slice(1)
    }
    for (let item of arr) {
        result = func(result, [item[0], item[1]])
    }
    return result
}

const totalCalories = (obj) => {
    let result = 0
    for (let [key, val] of Object.entries(obj)) {
        result += nutritionDB[key].calories * val
    }
    return result / 100
}

const lowCarbs = (obj) => {
    const result = {}
    for (let [key, val] of Object.entries(obj)) {
        const item = (nutritionDB[key].carbs * val) / 100
        if (item < 50) result[key] = parseFloat(parseFloat(val).toFixed(3));
    }
    return result
}
/* orange: { calories: 245, protein: 4.5, carbs: 65, sugar: 45, fiber: 1, fat: 0.5 } */
const cartTotal = (obj) => {
    // { orange: 500, oil: 20, sugar: 480 }
    const result = {}
    for (let [key, value] of Object.entries(obj)) {
        const child = {}
        for (let [k,v] of Object.entries(nutritionDB[key])) {
            child[k] = parseFloat(parseFloat((v * value) /100).toFixed(3))
        }
        result[key] = child
    }
    return result
}
