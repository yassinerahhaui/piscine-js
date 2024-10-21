import {argv} from "node:process"

const arg = argv[2]
export const verydisco = (arg) => {
    let arr = arg.split(' ')
    let result = arr.map(el=> {
        let len = el.length
        let middle = Math.ceil(len/2)
        return `${el.slice(middle)}${el.slice(0,middle)}`  
    })
    return result.join(' ')
}

console.log(verydisco(arg));
