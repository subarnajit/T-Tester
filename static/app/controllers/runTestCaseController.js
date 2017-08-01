(function () {

    function runTestCaseController ($scope,$rootScope) {
      $scope.page_load_error = null;
      $scope.finished_loading =  true;

    }
    TTester.controller("runTestCaseController", ['$scope','$rootScope',runTestCaseController]);
})();
