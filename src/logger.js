
import debug from 'debug';

debug.enable('app:*');

class Logger {
    constructor() {
        this.infoLog = debug('app:info');
        this.debugLog = debug('app:debug');
        this.errorLog = debug('app:error');
    }

    info(...res) {
        this.infoLog(...res);
    }
    debug(...res) {
        this.debugLog(...res);
    }
    error(...res) {
        this.errorLog(...res);
    }
}

let logger = new Logger();

window.logger = logger;

export default logger;