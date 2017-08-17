(function(){
  function runTestCaseService($http){

  this._server_host = "";

  this.executeTestCase = function(testConfigData,callback){
    $http.post(this._server_host+"/executeTestConfig",testConfigData,
          { transformRequest: angular.identity,
            headers: {'Content-Type': "application/json"}
          })
    .success(function (data, status, headers, conf) {
        callback(null, data);
    })
    .error(function (data, status, headers, conf) {
        callback(data,null);
    });
  };


  }
  TTester.service("runTestCaseService",["$http", runTestCaseService]);
})();
