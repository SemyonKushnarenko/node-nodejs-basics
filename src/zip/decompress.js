import { createGunzip } from 'zlib'
import path from 'path'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

export const decompress = async () => {
    const dearchiveToFile = path.join(path.dirname(''), 'src', 'zip', 'files', 'fileToCompress.txt')
    const archive = path.join(path.dirname(''), 'src', 'zip', 'files', 'archive.gz')

    const source = createReadStream(archive)
    const gunzip = createGunzip()
    const destination = createWriteStream(dearchiveToFile)

    pipeline(source, gunzip, destination, err => {
        if (err) throw new Error(err.message)
    })
}