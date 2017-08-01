var express = require('express'),
    morgan  = require('morgan'),
    bodyParser  = require('body-parser'),
    multer  = require('multer'),
    fs = require('fs');

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        console.log(file);;
        cb(null, './upload');
      },
      filename: function (req, file, cb) {
        cb(null, + Date.now() +'-'+ file.originalname);
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
    console.log(req.file);
    //console.log(req.file.path);
    var rstream = fs.createReadStream(req.file.path);
    rstream.pipe(res);
  });
});

app.listen(8080);
