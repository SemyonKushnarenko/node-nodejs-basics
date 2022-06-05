import path from 'path'
import fsPromises from 'fs/promises'

const pathToFreshFile = path.join(__dirname, 'src', 'fs', 'files', 'fresh.txt')

export const create = async () => {
    await fsPromises.access(pathToFreshFile)
    .then(() => {
        throw new Error('FS operation failed')
    })
    .catch(async () => {
        await fsPromises.writeFile(pathToFreshFile, 'I am fresh and young')
    })
}

create()