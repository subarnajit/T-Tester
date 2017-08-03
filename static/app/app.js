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
/*
TTester.directive('validFile',[function() {
  return {
    require : 'ngModel',
    scope : {format: '@', upload : '&upload'},
    link : function(scope, el, attrs, ngModel) {
      // change event is fired when file is selected
      el.bind('change', function(event) {
        console.log(event.target.files[0]);
        scope.upload({file:event.target.files[0]});
        scope.$apply(function() {
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      })
    }
  }
}]);
*/
TTester.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
    //};
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();

				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});
