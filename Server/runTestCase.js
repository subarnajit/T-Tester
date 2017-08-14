var exec = require('child_process').exec;

var child;

// executes `pwd`

child = exec("mocha C://Users//IBM_ADMIN//Documents//Project//Study//2017//NodeJS//ChaiWithIIB//DynamicTestCases.js", function (error, stdout, stderr) {

  console.log('stdout: ' + stdout);

  console.log('stderr: ' + stderr);

  if (error !== null) {

    console.log('exec error: ' + error);

  }

});
