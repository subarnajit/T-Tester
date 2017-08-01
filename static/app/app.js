var TTester = angular.module("TTester", ["ngRoute"]);

TTester.config(function ($routeProvider) {
  $routeProvider
      .when("/index",{controller:"indexController",
                           templateUrl:"app/partials/index.html"})
      .when("/runTestCase",{controller:"runTestCaseController",
                           templateUrl:"app/partials/runTestCase.html"})
      .when("/404",{controller:"404Controller",
                           templateUrl:"app/partials/404.html"})
      .when("/",{redirectTo:"/index"})
});
TTester.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
