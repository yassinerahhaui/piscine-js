let result;
const deepCopy = (obj) => {
    if (typeof obj !== "object" || typeof obj === null || typeof obj === 'function' || obj instanceof RegExp) {
        return obj;
    }
    const result = Array.isArray(obj) ? [] : {}
    for (let [key,_] of Object.entries(obj)) {
        result[key] = deepCopy(obj[key])
    }
    return result
}

// const obj = {
//     a: 1,
//     c: 15,
//     arr: ["a","b"],
//     child: {
//         a: 1,
//         b: 10
//     }
// }
// console.log(deepCopy(obj));
