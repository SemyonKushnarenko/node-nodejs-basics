import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const transformReverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse() + '\n')
        }
    })
    pipeline(process.stdin, transformReverse, process.stdout, err => {
        if (err) throw new Error(err.message)
    })
};