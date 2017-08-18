var express = require('express'),
    morgan  = require('morgan'),
    bodyParser  = require('body-parser'),
    fs = require('fs'),
    exec = require('child_process').exec;


var app = express();
app.use(require("morgan")("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+"/../static"));

app.post('/uploadTestConfig', function (req, res) {
  upload(req,res,function(err){
    if(err){
      console.log(err);
      return res.end("Error in uploading file");
    }
    res.end(req.file.buffer);
  });
});

app.post('/executeTestConfig', function(req,res){
  var output;
  fs.writeFileSync("./upload/TestCaseConfig.json",JSON.stringify(req.body), 'utf8');
  var command = "mocha DynamicTestCases.js --reporter json upload/TestCaseConfig.json";
  var child = exec(command, function (error, stdout, stderr) {
    output = JSON.parse(stdout);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(output) + "\n");
  });
});

app.listen(8080);
