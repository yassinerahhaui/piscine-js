const replica = (...args) => {
    const result = {}
    args.forEach(obj => {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === "object" && typeof result[key] === "object" && !Array.isArray(obj[key]) && !Array.isArray(result[key])){
                result[key] = {...result[key], ...obj[key]}
            }else {
                result[key] = obj[key]
            }
        })
    });
    return result
}


console.log(replica(
    {},
    { a: { b1: 1, c1: 2 } },
    { a: { b1: { d2: 1, e2: 2 } } },
    { a: { b1: { d2: { f3: 1, h3: 1 }, e2: { g3: 2 } } } },
    { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } }
));
//  { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 } }
// console.log({ a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } });
