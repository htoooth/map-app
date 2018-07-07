
class Logger {
    info() {
        console.log(arguments);  // eslint-disable-line
    }
    debug() {
        console.log(arguments);  // eslint-disable-line
    }
    error() {
        console.error(arguments);  // eslint-disable-line
    }
}

let logger = new Logger();

window.logger = logger;

export default logger;