const defaultCurry = (obj1) => (obj2) => {
    const result = { ...obj1 }
    for (let [key, val] of Object.entries(obj2)) {
        result[key] = val;
    }
    return result
}
const mapCurry = (func) => {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).map(func))
    }
}
const reduceCurry = (func) => (obj, init) => {
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
const filterCurry = (func) => (obj) => {
    const res = {}
    for (let [key, val] of Object.entries(obj)) {
        if (func([key, val])) {
            res[key] = val
        }
    }
    return res
}

const reduceScore = (personnel, init = 0) => {
    return reduceCurry((cum, [, values]) => values.isForceUser ? cum + values.pilotingScore + values.shootingScore : cum)(personnel, init)

}
console.log(reduceScore(personnel,0));

const filterForce = (personnel) => filterCurry(([_,person]) => person.shootingScore >= 80 && person.isForceUser)(personnel)
const mapAverage = (personnel) => mapCurry(([_,person]) => {
    console.log(person);
    return (person.shootingScore + person.pilotingScore) / 2
})(personnel)

