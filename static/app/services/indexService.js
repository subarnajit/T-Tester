(function(){
  function indexProvider($http){

  this._server_host = "";

  this.create = function(user,callback){
    $http.post(this._server_host+"/index",user)
    .success(function (data, status, headers, conf) {
        callback(null, data);
    })
    .error(function (data, status, headers, conf) {
        callback(data,null);
    });
  };

  this.logoutUser = function(user,callback){
    $http.get(this._server_host+"/service/logout",user)
    .success(function (data, status, headers, conf) {
        callback(null, data);
    })
    .error(function (data, status, headers, conf) {
        callback(data,null);
    });
  };

}
  TTester.service("indexProvider",["$http", indexProvider]);

})();
