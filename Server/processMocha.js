var exec = require('child_process').exec;

var child;

// executes `pwd`

 var command = "mocha DynamicTestCases.js --reporter json TestCases.json";
  var child = exec(command, function (error, stdout, stderr) { 
    console.log(stderr);   
    var output = JSON.parse(stdout);
    console.log(output);
  });