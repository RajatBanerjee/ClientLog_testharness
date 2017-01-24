var bunyan = require('bunyan');

PrettyStream = require('bunyan-prettystream');

var prettyStdOut = new PrettyStream();
var log;

prettyStdOut.pipe(process.stdout);
log = new bunyan({
    name: 'ClientLoggerTestHarness',
    streams: [{
        stream: prettyStdOut

    }, {
        type: 'rotating-file',
        level: 'info',
        path: './log/ClientLoggerTestHarness-info.log',
        period: '2h',
        count: 2
    }, {
        level: 'error',
        path: './log/ClientLoggerTestHarness-error.log'
    }]
});

module.exports = log;