var Mocha = require('mocha');
var testCaseDef = require("./DynamicTestCases.js");

var mocha = new Mocha({reporter:"json"});

mocha.addFile("./DynamicTestCases.js");
mocha.run()
    .on("start", function(){
        console.log("execution started");
    })
    .on('test', function(test) {
        console.log('Test started: '+test.title);
    })
    .on('test end', function(test) {
        console.log('Test done: '+test.title);
    })
    .on('pass', function(test) {
        console.log('Test passed');
        console.log(test);
    })
    .on('fail', function(test, err) {
        console.log('Test fail');
        console.log(test);
        console.log(err);
    })
    .on('end', function() {
        console.log('All done');
    });