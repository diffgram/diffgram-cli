const { exec, spawn } = require('node:child_process');

function up() {
    const ls = spawn('docker-compose')
    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data.toString());
      });
      
    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString());
      });

    ls.on('error', function (data) {
        console.log('stderr: ' + data.toString());
      });
      
    // ls.on('exit', function (code) {
    //     console.log('child process exited with code ' + code.toString());
    //   });
}

module.exports = up