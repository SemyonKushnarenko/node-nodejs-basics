import fs from 'fs'
import path from 'path'

export const read = async () => {
    const fileToRead = path.join(path.dirname(''), 'src', 'streams', 'files', 'fileToRead.txt')
    const readableStream = fs.createReadStream(fileToRead, 'utf-8')
    readableStream.on('data', chunk => process.stdout.write(chunk))
};