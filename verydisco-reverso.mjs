import { readFile } from 'node:fs/promises'
import { argv } from 'node:process';

const arg = argv[2]

const verydiscoReverso = async (filename) => {
    let data = await readFile(filename,{encoding: 'utf-8'});
    let arr = data.split(' ')
    let result = arr.map(el => {
        let middle = Math.floor(el.length/2)
        return `${el.slice(middle)}${el.slice(0,middle)}`
    }).join(' ')
    console.log(result);
}

verydiscoReverso(arg)
// function newFunction(result) {
//     console.log(result);
// }

