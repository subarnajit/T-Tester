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
        $scope.user = {};
        $scope.user.choiceSet = {
          XPATH: [],
          OPERATION: [],
          VALUE:[]
        };
        $scope.user.quest = {};
        $scope.user.choiceSet.XPATH = [];
        $scope.user.choiceSet.OPERATION = [];
        $scope.user.choiceSet.VALUE = [];
        $scope.addNewChoice = function() {
          $scope.user.choiceSet.XPATH.push('');
          $scope.user.choiceSet.OPERATION.push('');
          $scope.user.choiceSet.VALUE.push('');
        };
        $scope.removeChoice = function(z) {
          var a,b,c = z
          $scope.user.choiceSet.XPATH.splice(a, 1);
          $scope.user.choiceSet.OPERATION.splice(b, 1);
          $scope.user.choiceSet.VALUE.splice(c, 1);
        };
      };

      $scope.next = function() {
      var indexAssert = $scope.user.choiceSet.XPATH;
      jsonData = [];
      var i = 0
        indexAssert.forEach(function(eachXPath) {
          var DataAssert = {
            "DataTagName": eachXPath,
            "DataTagOperation": $scope.user.choiceSet.OPERATION[i],
            "DataTagValue": $scope.user.choiceSet.VALUE[i]
          };
          i= i+1;
          jsonData.push(DataAssert);
        });
        var TestCase = {
          "IIBTestConfig":{
            "App": {
              "name":$scope.user.application_name,
              "endpoint":$scope.user.endpoint_url,
            "testCases": {
                "name": $scope.user.test_case_name,
                "methodToCall": $scope.user.method,
                "payload": $scope.user.payload,
                "MessageFomatAsserts":{
                  "status": $scope.user.status,
                  "messageFormat": $scope.user.format,
                  "arrayCheck": $scope.user.is_array,
                  "objectCheck": $scope.user.is_object,
                },
                "DataFormatAssert":   jsonData
            }
          }
        }
      };
      console.log(JSON.stringify(TestCase));
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
