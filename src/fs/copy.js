import path from 'path'
import fsPromises from 'fs/promises'
import fs from 'fs'

export const copy = async () => {
    const pathToFiles = ['src', 'fs', 'files']
    const filesCopy = ['src', 'fs', 'files_copy']

    await fs.access(path.join(path.dirname(''), ...pathToFiles), err => {
        if (err) throw new Error('FS operation failed')
    })
    await fs.access(path.join(path.dirname(''), ...filesCopy), async err => {
        if (err) {
            await copyFiles(pathToFiles, filesCopy)
        } else {
            throw new Error('FS operation failed')
        }
    })

}

copy()

async function findFiles(searchPath) {
    let files = await fsPromises.readdir(path.join(path.dirname(''), ...searchPath), { withFileTypes: true });
    let nFiles = [];
    let nDirectories = [];
    for (let file of files) {
        file.path = searchPath;
        if (file.isFile()) {
            nFiles.push(file);
        }
        else if (file.isDirectory()) {
            let newSearchPath = [...searchPath];
            newSearchPath.push(file.name);
            let newFiles = await findFiles(newSearchPath);
            nFiles = [...nFiles, ...newFiles[0]];
            nDirectories.push(file);
        }
    }
    return [nFiles, nDirectories];
}

async function copyFiles(copyFrom, copyTo) {
    await fsPromises.mkdir(path.join(path.dirname(''), ...copyTo), { recursive: true });
    let files_directories = await findFiles(copyFrom);
    let files = files_directories[0];
    let directories = files_directories[1];
    directories.forEach(async (directory) => {
        let newPath = [...directory.path];
        newPath[2] = path.join(copyTo[2]);
        await fsPromises.mkdir(path.join(path.dirname(''), ...newPath, directory.name), { recursive: true });

    });

    files.forEach(async file => {
        let newPath = [...file.path];
        newPath[2] = path.join(copyTo[2]);
        await fsPromises.copyFile(path.join(path.dirname(''), ...file.path, file.name), path.join(path.dirname(''), ...newPath, file.name));
    });
}