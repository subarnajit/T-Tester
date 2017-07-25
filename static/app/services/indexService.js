(function(){
  function indexService($http){

  this._server_host = "http://localhost:8080";

  this.uploadFile = function(file,callback){
    console.log("inside service: calling API");
    var fd = new FormData();
    console.log(file);
    fd.append('testConfigFile', file);
    $http.post(this._server_host+"/uploadTestConfig",fd,
          { transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
          })
    .success(function (data, status, headers, conf) {
        callback(null, data);
    })
    .error(function (data, status, headers, conf) {
        callback(data,null);
    });
  };


  }
  TTester.service("indexService",["$http", indexService]);
})();
