import fs from 'fs'
import path from 'path'

export const write = async () => {
    const fileToWrite = path.join(path.dirname(''), 'src', 'streams', 'files', 'fileToWrite.txt')
    const writeableStream = fs.createWriteStream(fileToWrite, 'utf-8')
    process.stdin.on('data', chunk => writeableStream.write(chunk))
};