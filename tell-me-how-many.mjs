import { argv } from 'node:process';
import {readdir} from 'node:fs/promises'

const arg = argv[2]
const tellMeHowMany = async (dirname) => {
    const files = await readdir(dirname)
    console.log(files.length);
}

tellMeHowMany(arg)