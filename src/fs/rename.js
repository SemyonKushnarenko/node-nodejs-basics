import path from 'path'
import fs from 'fs'

const newFileNamePath = path.join(path.dirname(''), 'src', 'fs', 'files', 'properFilename.md')
const oldFileNamePath = path.join(path.dirname(''), 'src', 'fs', 'files', 'wrongFilename.txt')

export const rename = async () => {
    await fs.access(newFileNamePath, async err => {
        if (err) {
            await fs.access(oldFileNamePath, async err => {
                if (err) throw new Error('FS operation failed') 
                await fs.rename(oldFileNamePath, newFileNamePath, err => {
                    if (err) throw new Error()
                })
            })
        } else {
            throw new Error('FS operation failed')
        }
        
    })
}

rename()