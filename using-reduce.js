const adder = (arr) => arr.reduce((total,current)=> total + current)
const sumOrMul = (arr)=> arr.reduce((total,num)=> num%2 === 0 ? total * num : total + num)
const funcExec = (arr) => arr.reduce((_, func)=> func())

// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(adder(arr));
// console.log(sumOrMul(arr));