import { readFile, writeFile, readdir } from 'node:fs/promises'
import { argv } from 'node:process'
import { join } from 'node:path';
const arg = argv[2];
const tellMeVip = async (dirname) => {
    const files = await readdir(dirname)
    let arr = []
    let id = 0
    for (let file of files) {
        const newfile = join(arg, file)
        const data = await readFile(`${newfile}`, 'utf8')
        let jsonData = JSON.parse(data)
        let [firstName, lastName] = file.split(".json")[0].split("_")
        if (jsonData.answer === 'yes') {
            arr.push(`${lastName} ${firstName}`)
        }
    }
    arr.sort()
    let result = arr.map(el => {
        id++
        el = `${id}. ${el}`
        return el
    }).join('\n')
    writeFile('vip.txt', result)
}
tellMeVip(arg)