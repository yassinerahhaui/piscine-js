import { argv } from 'node:process';
import { readFileSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';

const args = argv.slice(2)

const tellItCypher = (args) => {
    let result;
    let fileName;
    const [file, encrypt, option] = args;
    const data = readFileSync(file, 'utf-8')
    if (encrypt === 'encode') {
        result = Buffer.from(data).toString("base64")
        fileName = 'cypher.txt'
    } else {
        result = Buffer.from(data, "base64").toString("utf-8")
        fileName = 'clear.txt'
    }
    if (option) {
        writeFileSync(option, result)
    } else {
        writeFileSync(fileName, result)
    }
}
tellItCypher(args)

