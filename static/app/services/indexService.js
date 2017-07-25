(function(){
  function indexService($http){

  this._server_host = "";

  this.upload = function(user,callback){
    $http.post(this._server_host+"/uploadTestConfig",testConfigFile)
    .success(function (data, status, headers, conf) {
        callback(null, data);
    })
    .error(function (data, status, headers, conf) {
        callback(data,null);
    });
  };

}
  TTester.service("indexService",["$http", indexProvider]);

})();
