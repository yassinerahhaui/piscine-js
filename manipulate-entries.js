const filterEntries = (obj, func) => {
    const res = {}
    for (let [key,val] of Object.entries(obj)) {
        if (func([key, val],key, obj)) {
            res[key] = val
        }
    }
    return res
}
const mapEntries = (obj, func) => {
    const result = {}
    for (let [key, val] of Object.entries(obj)) {
        result[key] = func([key, val], key, obj)
    }
    return result
}

const reduceEntries = (obj, func, init) => {
    let [firstkey,firstVal] = Object.entries(obj)[0]
    let result = init || [firstkey,firstVal]
    for (let [key, val] of Object.entries(obj)) {
        if (!init && key === firstkey) {
            continue
        }
        result = [func(result, val, key, obj), func(result, key, key, obj)]
    }
    return result
}

const totalCalories = () => {}
const lowCarbs = () => {}
const cartTotal = () => {}


/* tests */
const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
console.log('Total cart nutritional facts:')
console.log(cartTotal(groceriesCart))