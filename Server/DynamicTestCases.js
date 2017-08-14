var chai    = require('chai');
var expect  = require('chai').expect;
var chaiHttp = require('chai-http');
var testConfig = require("./TestCases.json");

chai.use(chaiHttp);

var testCases = testConfig.IIBTestConfig.App1.testCases;;
var methodToCall,reqMainObj,req;

describe(testConfig.IIBTestConfig.App1.name + " testing" , function() {
  var tests = testConfig.IIBTestConfig.App1.testCases;
  tests.forEach(function(test) {
    it(test.description, function(done) {
      methodToCall = test.methodToCall;
      reqMainObj = chai.request(testConfig.IIBTestConfig.App1.hostURL);
      switch(methodToCall) {
          case "get":
            req = reqMainObj.get(testConfig.IIBTestConfig.App1.contextURL);
            break;
          case "put":
              req = reqMainObj.put(testConfig.IIBTestConfig.App1.contextURL)
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
