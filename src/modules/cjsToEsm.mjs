import path from 'path'
import { release, version } from 'os'
import { createServer } from 'http'
import './files/c.js'
import { fileURLToPath } from 'url'
import fs from 'fs'

const random = Math.random();

const __filename = path.join(fileURLToPath(import.meta.url))
const __dirname = path.join(fileURLToPath(import.meta.url), '..')

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await fs.promises.readFile(path.join(__dirname, 'files', 'a.json')))
} else {
    unknownObject = JSON.parse(await fs.promises.readFile(path.join(__dirname, 'files', 'b.json')))
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServer((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};

