const adder = (arr,initial) => arr.reduce((total,current)=> {
    return total + current
},initial)
const sumOrMul = (arr,initial)=> arr.reduce((total,num)=> {
    return num%2 === 0 ? total * num : total + num
},initial)
const funcExec = (arr,initial) => arr.reduce((total, func)=> func(total),initial)

// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(adder(arr));
// console.log(sumOrMul(arr));