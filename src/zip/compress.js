import { createGzip } from 'zlib'
import path from 'path'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

export const compress = async () => {
    const fileToArchive = path.join(path.dirname(''), 'src', 'zip', 'files', 'fileToCompress.txt')
    const archive = path.join(path.dirname(''), 'src', 'zip', 'files', 'archive.gz')

    const source = createReadStream(fileToArchive)
    const gzip = createGzip()
    const destination = createWriteStream(archive)

    pipeline(source, gzip, destination, err => {
        if (err) throw new Error(err.message)
    })
}