import { fork } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import Logger from './classes/Logger.mjs';

const logger = new Logger();

const srcFolder = join(fileURLToPath(new URL('.', import.meta.url)), '../src');
const tests = readdirSync(srcFolder).filter(file => file.endsWith('.mjs') && file !== 'index.mjs');

const runTest = test => {
    return new Promise(resolve => {
        logger.logStart(test);

        const child = fork(join(srcFolder, test), {
            stdio: 'inherit',
        });

        child.on('message', state => {
            if (isNaN(Number(state))) return logger.log(state);
            if (Number(state) === 1) logger.logSuccess(test);
            if (Number(state) === 0) logger.logError(test);
            resolve();
        });

        child.on('error', e => {
            logger.logError(test);
            logger.log(e);
            resolve();
        });

        child.on('exit', e => resolve());
    });
};

(async () => {
    for (const test of tests) {
        await runTest(test);
    }
})();
