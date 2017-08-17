var chai    = require('chai');
var expect  = require('chai').expect;
var chaiHttp = require('chai-http');

var testConfig = require("./"+process.argv[5]);

chai.use(chaiHttp);
var methodToCall,reqMainObj,req;

describe(testConfig.IIBTestConfig.Apps[0].name + " testing" , function() {
  var tests = testConfig.IIBTestConfig.Apps[0].testCases;
  tests.forEach(function(test) {
    it(test.description, function(done) {
      methodToCall = test.methodToCall;
      reqMainObj = chai.request(testConfig.IIBTestConfig.Apps[0].hostURL);
      switch(methodToCall) {
          case "get":
            req = reqMainObj.get(testConfig.IIBTestConfig.Apps[0].contextURL);
            break;
          case "put":
              req = reqMainObj.put(testConfig.IIBTestConfig.Apps[0].contextURL)
                    .send(JSON.stringify(test.dataToSend));
              break;
          default: done();
      }
      req.end(function(err,res){

          if(test.MessageFomatAsserts.status){
            expect(res).to.have.status(test.MessageFomatAsserts.status);
          }

          if(test.MessageFomatAsserts.messageFormat) {
            expect(res).to.be[test.MessageFomatAsserts.messageFormat];
          }

          for(dfa in test.DataFormatAssert) {
            var xpath = "res.body." + test.DataFormatAssert[dfa].DataTagName;
            expect(eval(xpath)).to.equal(test.DataFormatAssert[dfa].DataTagValue);
          }
          done();
        });

    });
  });
});
