var express = require('express'),
    morgan  = require('morgan'),
    bodyParser  = require('body-parser'),
    multer  = require('multer');

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './upload');
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
      }
    });
var upload = multer({ storage: storage}).single('testConfigFile');


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
    //var testConfigData = JSON.parse(req.file);
    console.log(req.file);
    res.end("Uploaded File");
  });
});

app.listen(8080);
