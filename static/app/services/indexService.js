(function(){
  function indexService($http){

  this._server_host = "";

  this.uploadFile = function(file,callback){
    var fd = new FormData();
    fd.append('testConfigFile', file);
    console.log("Call service to upload file");
    console.log(file);
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
