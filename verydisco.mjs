import {argv} from "node:process"

const arg = argv[2]
let arr = arg.split(' ')
let result = arr.map(el=> {
    let len = el.length
    let middle = Math.ceil(len/2)
    return `${el.slice(middle)}${el.slice(0,middle)}`  
})
result = result.join(' ')
console.log(result);
