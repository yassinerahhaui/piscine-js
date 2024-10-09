const adder = (arr) => arr.reduce((total,current)=> {
    return total + current
})
const sumOrMul = (arr)=> arr.reduce((total,num)=> {
    return num%2 === 0 ? total * num : total + num
})
const funcExec = (arr,initial) => arr.reduce((total, func)=> func(total),initial)

let arr = [1, 2, 3, 4]

console.log(adder(arr));
// console.log(sumOrMul(arr));