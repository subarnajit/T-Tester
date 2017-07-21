var TTester = angular.module("TTester", ["ngRoute"]);

TTester.config(function ($routeProvider) {
  $routeProvider
      .when("/index",{controller:"indexController",
                           templateUrl:"app/partials/index.html"})
      .when("/404",{controller:"404Controller",
                           templateUrl:"app/partials/404.html"})
      .when("/",{redirectTo:"/index"})
});
