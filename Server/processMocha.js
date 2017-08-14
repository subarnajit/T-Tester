var exec = require('child_process').exec;

var child;

// executes `pwd`

child = exec("mocha ./DynamicTestCases.js --reporter json", function (error, stdout, stderr) {

  console.log('stdout: ' + stdout);

  console.log('stderr: ' + stderr);

  if (error !== null) {

    console.log('exec error: ' + error);

  }

});