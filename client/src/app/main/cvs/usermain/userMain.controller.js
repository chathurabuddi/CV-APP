(function ()
{
    'use strict';

    angular
        .module('app.pages.userMain')
        .controller('userMain', userMain);

    /** @ngInject */
    function userMain($scope,$http,$location,$sce)
    {


      $http.post('/manageCv/getCv',{id:"send id here"}).success(function(response) {
        console.log(response[0]);
        var response = response[0];
        $scope.fname = response.fname;
        $scope.lname = response.lname;
        $scope.company1 = response.company1;
        $scope.company2 = response.company2;
        $scope.company3 = response.company3;
        $scope.cvList = "test here";
      });

      // $http.post('/getCvList',{id:"send the company name here"}).success(function(response) {
      //   console.log(response);
      //   $scope.cvList = response;
      // });

    }
})();
