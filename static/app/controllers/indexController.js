(function () {

    function indexController ($scope) {
      $scope.page_load_error = null;
      $scope.finished_loading =  true;
      $scope.load_test_form =  false;
      $scope.load_upload_form =  false;
      $scope.is_index =  true;
      // $scope.loggedIn = false;
      // $scope.loggedOut = false;

      $scope.create = function(){
        $scope.page_load_error = false;
        $scope.finished_loading =  true;
        $scope.load_test_form =  true;
        $scope.load_upload_form =  false;
        $scope.is_index =  false;
      };

      $scope.upload = function(){
        $scope.page_load_error = false;
        $scope.finished_loading =  true;
        $scope.load_test_form =  false;
        $scope.load_upload_form =  true;
        $scope.is_index =  false;
      };

    }
    TTester.controller("indexController", ['$scope',indexController]);
})();
