import path from 'path'
import fs from 'fs'

const pathToRemoveFile = path.join(path.dirname(''), 'src', 'fs', 'files', 'fileToRemove.txt')

export const remove = async () => {
    await fs.access(pathToRemoveFile, async err => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            await fs.unlink(pathToRemoveFile, err => {
                if (err) throw new Error()
            })
        }
        
    })
}

remove()