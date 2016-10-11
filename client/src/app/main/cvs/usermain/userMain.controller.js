(function() {
  'use strict';

  angular
    .module('app.pages.userMain')
    .controller('userMain', userMain);

  /** @ngInject */
  function userMain($scope, $http, $location, $sce) {
    $scope.default = 'You have not upload CV ';
    console.log("currentuser yata");
    $http.get('/currentuser').then(function(result) {
      $scope.userid = result.data._id;
      console.log("currentuser data");
      console.log($scope.userid);

      $http.post('/manageCv/getCv', {
        id: $scope.userid
      }).success(function(response) {
        if ('null' != response){
          console.log(response[0]);
          var response = response[0];
          $scope.fname = response.fname;
          $scope.lname = response.lname;
          $scope.company1 = response.company1;
          $scope.company2 = response.company2;
          $scope.company3 = response.company3;
          $scope.default = '';
          $scope.cvpath = $sce.trustAsResourceUrl(response.cvpath);
        }

      });

    });



    // $http.post('/getCvList',{id:"send the company name here"}).success(function(response) {
    //   console.log(response);
    //   $scope.cvList = response;
    // });

  }
})();
