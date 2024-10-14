const fusion = (obj1,obj2) => {
    const obj = {...obj1}
    for (let [key,val] of Object.entries(obj2)) {
        if (!obj[key]) {
            obj[key] = val
        } else {
            if (typeof obj[key] !== typeof val) {
                obj[key] = val
            } else if (Array.isArray(val)) {
                obj[key] = [...obj[key],...val]
            } else if (typeof val === 'string') {
                obj[key] = `${obj[key]} ${val}`
            } else if (typeof val === 'number') {
                obj[key] = obj[key] + val
            } else if (typeof val === "object") {
                obj[key] = fusion(obj[key], val)
            }
        }
    }
    return obj
}

// // // array
// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }));
// // // -> { arr: [ 1, '2', 2 ] }
// console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
// // // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

// // // string
// console.log(fusion({ str: "salem" }, { str: "alem" })) 
// // // -> { str: 'salem alem' }
// console.log(fusion({ str: "salem" }, { str: "" })) 
// // // -> { str: 'salem ' }

// // // numbers
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));
// // // -> { a: 20, b: 10, c: 1 }

// // // object
// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); 
// // // -> { a: 11, x: [], b: { c: 'Salem alem' } }
// console.log(fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } })); 
// // // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }