const defaultCurry = (obj1) => (obj2) => {
    const result = { ...obj1 }
    for (let [key, val] of Object.entries(obj2)) {
        result[key] = val;
    }
    return result
}
const mapCurry = (func) => (obj) => {
    const result = {}
    for (let [key, val] of Object.entries(obj)) {
        [key, val] = func([key, val])
        result[key] = val
    }
    return result
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

const personnel = {
    lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
    sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
    calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
}
const reduceValues = (obj, func, init) => {
    let firstkey = Object.keys(obj)[0]
    let result = init || obj[firstkey]
    for (let [key, val] of Object.entries(obj)) {
        if (typeof init === 'undefined' && key === firstkey) {
            continue
        }
        result = func(result, val, key, obj)
    }
    return result
}

const reduceScore = (personnel, init = 0) => {
    return reduceCurry((cum, [, values]) => values.isForceUser ? cum + values.pilotingScore + values.shootingScore : cum)(personnel, init)

}
console.log(reduceScore(personnel,0));

const filterForce = (personnel) => filterCurry((person) => person.shootingScore >= 80)(personnel)
const mapAverage = (personnel) => mapCurry((person) => {
    return (person.shootingScore + person.pilotingScore) / 2
})(personnel)

// console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
//   })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
//   }));
