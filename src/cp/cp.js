import { fork } from 'child_process'
import path from 'path';

export const spawnChildProcess = async (args) => {
    const script = path.join('src', 'cp', 'files','script.js')
    fork(script, args, {
        stdio: [process.stdin, process.stdout, process.stderr, 'ipc'],
    }).on('exit', code => process.exit(code));
};

spawnChildProcess(['--prp', 'val', 'dsafas','asdfa'])