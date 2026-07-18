import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

export const calculateHash = async () => {
    const fileToHash = path.join(path.dirname(''), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt')
    fs.readFile(fileToHash, (err, data) => {
        if (err) throw new Error(err.message)
        console.log(crypto.createHash('sha256').update(data).digest('hex'))
    })
};