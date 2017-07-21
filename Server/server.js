var express = require('express'),
    morgan  = require('morgan'),
    bodyParser  = require('body-parser')

var app = express();
app.use(require("morgan")("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+"/../static"));


/*
bcrypt.hash(, 10,(err,hash)=>{
  if(err){
    return done (null, false,{message: "Error in hasing password"});
  }
  else {

    if(results[0].password == hash)
    {
      return done(null, results[0]);
    }
    else
    {

    }
  }
});
*/
//serialize
  app.listen(8080);
