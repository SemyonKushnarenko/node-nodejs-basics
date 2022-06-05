import path from 'path'
import fsPromises from 'fs/promises'
import fs from 'fs'

const pathToFilesFolder = path.join(path.dirname(''), 'src', 'fs', 'files')

export const list = async () => {
    await fs.access(pathToFilesFolder, async err => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            try {
                await fsPromises.readdir(pathToFilesFolder)
                .then(files => files.forEach(file => console.log(file)))
            } catch (err) {
                throw new Error(err.message)
            }
        }
        
    })
}