import path from 'path'
import fs from 'fs'

const pathToFreshFile = path.join(path.dirname(''), 'src', 'fs', 'files', 'fresh.txt')

export const create = async () => {
    await fs.access(pathToFreshFile, async err => {
        if (err) {
            await fs.writeFile(pathToFreshFile, 'I am fresh and young', err => {
                if (err) throw new Error()
            })
        } else {
            throw new Error('FS operation failed')
        }
        
    })
}

create()