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

// const nutritionDB = {
//     tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
//     vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
//     oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//     onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//     garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
//     sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
//     orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 9, fiber: 0.2, fat: 0.1 },
// }

const totalCalories = (obj) => {
    let result = 0
    for (let [key, val] of Object.entries(obj)) {
        result += nutritionDB[key].calories * val
    }
    return result / 100
}

const lowCarbs = (obj) => {
    const result = {}
    let minKey = Object.keys(obj)[0]
    let minVal = nutritionDB[minKey].carbs * obj[minKey]

    for (let [key, val] of Object.entries(obj)) {
        const item = nutritionDB[key].carbs * val
        if (minVal > item) {
            minKey = key;
            minVal = item
        }
    }
    result[minKey] = obj[minKey]
    return result
}
/* orange: { calories: 245, protein: 4.5, carbs: 65, sugar: 45, fiber: 1, fat: 0.5 } */
const cartTotal = (obj) => {
    // { orange: 500, oil: 20, sugar: 480 }
    const result = {}
    for (let [key, value] of Object.entries(obj)) {
        const child = {}
        for (let [k,v] of Object.entries(nutritionDB[key])) {
            child[k] = parseFloat((v * value) /100)
        }
        result[key] = child
    }
    return result
}


/* tests */
// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))
