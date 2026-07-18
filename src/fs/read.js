import path from 'path'
import fsPromises from 'fs/promises'
import fs from 'fs'

const pathToReadFile = path.join(path.dirname(''), 'src', 'fs', 'files', 'fileToRead.txt')

export const read = async () => {
    fs.readFile(pathToReadFile, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            console.log(data)
        }
        
    })
}