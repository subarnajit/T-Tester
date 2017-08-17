(function () {

    function runTestCaseController ($scope,$rootScope,$window,runTestCaseService) {
      $scope.page_load_error = null;
      $scope.finished_loading =  true;
      $scope.showTestCases = true;
      $scope.showResults = false;


      $scope.executeTest = function() {
      runTestCaseService.executeTestCase(JSON.stringify($rootScope.testConfigData),(err,data)=>{
        if(err){
             $scope.page_load_error = true;
             $scope.failuremessage = "Error while excuting test case";
             $scope.showResults = false;
             $scope.showTestCases = false;
         }
         else {
           $scope.showResults = true;
           $scope.showTestCases = false;
           $scope.testResults = data
         }
      });
      };

      $scope.goHome = function(){
        $rootScope.testConfigData = null;
        var host = $window.location.host;
        var landingUrl = "http://" + host;
        $window.location.href = landingUrl;
      }

    }

    TTester.controller("runTestCaseController", ['$scope','$rootScope','$window','runTestCaseService',runTestCaseController]);
})();
