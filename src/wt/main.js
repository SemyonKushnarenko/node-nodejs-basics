import os from 'os'
import path from 'path'
import { Worker } from 'worker_threads'

export const performCalculations = async () => {
    const answer = []
    const pathToWorker = path.resolve(path.dirname(''), 'src', 'wt', 'worker.js')
    const numberOfCpus = os.cpus()

    for (const cpu of numberOfCpus) {
        const index = numberOfCpus.indexOf(cpu)
        const worker = new Worker(pathToWorker, {workerData: 10+index})
        answer.push(new Promise(resolve => {
            worker.on('message', obj => resolve(answer[index] = obj))
            worker.on('error', err => resolve(answer[index] = {status: 'error', data: null}))
        }))
    }

    console.log(await Promise.all(answer))
};