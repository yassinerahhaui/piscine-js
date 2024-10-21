import {argv} from 'node:process';
import { verydisco } from './verydisco.mjs';
import { writeFile } from 'node:fs/promises';

const arg = argv[2]
const text = verydisco(arg)
writeFile('./verydisco-forever.txt',text)