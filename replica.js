// const replica = ( ...args) => {
//     let result = args[1]
//     for (let i = 1;i < Object.keys(args).length; i++) {
//         for (let[key,val] of Object.entries(args[i])) {
//             result[key] = val
//         }
//     }
//     // console.log(...args);
//     return result
// }
const replica = (...args) => {
    const result = {};

    for (let i = 1; i < args.length; i++) {
        const current = args[i];
        for (const [key, val] of Object.entries(current)) {
            if (typeof val === 'object' && !Array.isArray(val) && val !== null && typeof val !== "function" && !val instanceof RegExp) {
                result[key] = result[key] || {};
                Object.assign(result[key], val);
            } else {
                result[key] = val;
            }
        }
    }
    Object.assign(result, args[0]);
    
    return result;
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
