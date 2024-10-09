const adder = (arr = [],initial = 0) => arr.reduce((total,current)=> {
    return total + current
},initial)
const sumOrMul = (arr = [],initial = 0)=> arr.reduce((total,num,index,arr)=> {
    return num%2 === 0 ? total * num : total + num
},initial)
const funcExec = (arr = [],initial= 0) => arr.reduce((total, func)=> func(total),initial)

// let arr = [1, 2, 3, 4]

// console.log(adder([]));
// console.log(sumOrMul(arr));