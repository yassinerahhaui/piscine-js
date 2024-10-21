import {argv} from 'node:process'
import {readdir} from 'node:fs/promises'

const arg = argv[2]
const tellMeWho = async (dirname) => {
    const files = await readdir(dirname)
    
    let result = files.map((file) => {
        let filename = file.split('.json')[0].split('_')
        return `${filename[1]} ${filename[0]}`
    })
    let id = 0
    result.sort()
    result = result.map((file)=> {
        id++
        return `${id}. ${file}`
    }).join('\n')

    console.log(result);
    
}
tellMeWho(arg)

// yasiin_h-json
//hamza_hamza.json