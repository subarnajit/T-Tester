(function () {

    function indexController ($scope,indexService) {
      $scope.page_load_error = null;
      $scope.finished_loading =  true;
      $scope.load_test_form =  false;
      $scope.load_upload_form =  false;
      $scope.is_index =  true;

      // $scope.loggedIn = false;
      // $scope.loggedOut = false;

      $scope.reload = function() {
      $scope.page_load_error = null;
      $scope.finished_loading =  true;
      $scope.load_test_form =  false;
      $scope.load_upload_form =  false;
      $scope.is_index =  true;
    };

      $scope.create = function(){
        $scope.page_load_error = false;
        $scope.finished_loading =  true;
        $scope.load_test_form =  true;
        $scope.load_upload_form =  false;
        $scope.is_index =  false;

        $scope.choiceSet = {
          XPATH: [],
          OPERATION: [],
          VALUE:[]
        };
        $scope.quest = {};
        $scope.choiceSet.XPATH = [];
        $scope.choiceSet.OPERATION = [];
        $scope.choiceSet.VALUE = [];
        $scope.addNewChoice = function() {
          $scope.choiceSet.XPATH.push('');
          $scope.choiceSet.OPERATION.push('');
          $scope.choiceSet.VALUE.push('');
        };
        $scope.removeChoice = function(z) {
          var a,b,c = z
          $scope.choiceSet.XPATH.splice(a, 1);
          $scope.choiceSet.OPERATION.splice(b, 1);
          $scope.choiceSet.VALUE.splice(c, 1);
        };
      };

      $scope.uploadTestConfig =  function() {
        var file = $scope.testConfigFile;
        console.log(file);
        indexService.uploadFile(file,(err,data)=>{
         if(err){
             $scope.page_load_error = true;
             $scope.failuremessage = "Error while loading file"
         }
         else {
           $scope.page_load_error = null;
           $scope.finished_loading =  true;
           $scope.load_test_form =  false;
           $scope.load_upload_form =  false;
           $scope.is_index =  true;
         }
       });
       };
      $scope.upload = function(){
        $scope.page_load_error = false;
        $scope.finished_loading =  true;
        $scope.load_test_form =  false;
        $scope.load_upload_form =  true;
        $scope.is_index =  false;
      };
    }
    TTester.controller("indexController", ['$scope','indexService',indexController]);
})();
