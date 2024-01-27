import nodemon from 'nodemon';
import Logger from './classes/Logger.mjs';
const logger = new Logger();

nodemon({
    script: 'app/index.mjs',
    ext: 'mjs',
    watch: ['src'],
});
