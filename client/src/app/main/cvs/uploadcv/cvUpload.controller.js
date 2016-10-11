(function() {
  'use strict';

  angular
    .module('app.pages.cvUpload', ['ngFileUpload'])
    .controller('CVUpload', CVUpload);

  /** @ngInject */

  function CVUpload($scope, Upload, $element, $timeout, $window, $http) {
    $http.get('/companylist').success(function(response) {
      $scope.companies = response;
    });

    $scope.uploadStatus = false;


    $http.get('/currentuser').then(function(result) {
      $scope.userid = result.data._id;
      $scope.userdata = result.data;
      console.log($scope.userid);

      $http.post('/manageCv/getCv', {
        id: $scope.userid
      }).success(function(response) {
        console.log("---------->" + response);
        if (typeof response[0] !== 'undefined' && response[0] !== null) {
          $scope.uploadStatus = true;
          console.log("in here");
        }
        console.log(response);

      });
    });

    $scope.searchTerm = null;
    $scope.clearSearchTerm = function() {

    };
    // The md-select directive eats keydown events for some quick select
    // logic. Since we have a search input here, we don't need that logic.
    $element.find('input').on('keydown', function(ev) {
      ev.stopPropagation();
    });
    //print($scope.ccc);
    $scope.formData = {};

    $scope.$watch('formData.company1', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company1) {
          $scope.selectedObject = $scope.companies[i];
          if ($scope.selectedObject.catv == false) {
            $scope.formData.position1 = "";
          }
          $scope.secondpre = true;
        }
      }
    });

    $scope.$watch('formData.company2', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company2) {
          $scope.selectedObject1 = $scope.companies[i];
          if ($scope.selectedObject1.catv == false) {
            $scope.formData.position2 = "";
          }
          $scope.thirdpre = true;

        }
      }
    });
    $scope.$watch('formData.company3', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company3) {
          $scope.selectedObject2 = $scope.companies[i];
          if ($scope.selectedObject2.catv == false) {
            $scope.formData.position3 = "";
          }
          $scope.fourthpre = true;
        }
      }
    });
    $scope.$watch('formData.company4', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company4) {
          $scope.selectedObject3 = $scope.companies[i];
          if ($scope.selectedObject3.catv == false) {
            $scope.formData.position4 = "";
          }
          $scope.fivpre = true;
        }
      }
    });
    $scope.$watch('formData.company5', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company5) {
          $scope.selectedObject4 = $scope.companies[i];
          if ($scope.selectedObject4.catv == false) {
            $scope.formData.position5 = "";
          }
          $scope.sixpre = true;
        }
      }
    });
    $scope.$watch('formData.company6', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company6) {
          $scope.selectedObject5 = $scope.companies[i];
          if ($scope.selectedObject5.catv == false) {
            $scope.formData.position6 = "";
          }
        }
      }
    });


    // $scope.sendForm = function(file) {
    //
    //   //console.log($scope.formData.selected.length);
    //   console.log($scope.formData.picFile);
    //   console.log($scope.formData);
    //   console.log(file);
    //
    // }

    $scope.sendForm = function(file) {
      console.log("--->start");
      console.log($scope.formData.picFile);
      console.log($scope.formData);
      console.log("user id" + $scope.userid);
      console.log("--->end");

      file.upload = Upload.upload({

        url: ' /upload',
        data: {
          file: file,
          fname: $scope.userdata.local.firstname,
          lname: $scope.userdata.local.lastname,
          email: $scope.userdata.local.email,
          telnumber: $scope.formData.telnumber,
          company1: $scope.formData.company1,
          company2: $scope.formData.company2,
          company3: $scope.formData.company3,
          company4: $scope.formData.company4,
          company5: $scope.formData.company5,
          company6: $scope.formData.company6,
          position1: $scope.formData.position1.toString(),
          position2: $scope.formData.position2.toString(),
          position3: $scope.formData.position3,
          position4: $scope.formData.position4,
          position5: $scope.formData.position5,
          position6: $scope.formData.position6,
          userid: $scope.userid
        },
      });

      file.upload.then(function(response) {
        $timeout(function() {
          file.result = response.data;
        });
        if (response.data.error_code === 0) { //validate success
          console.log('Success ' + response.config.data.file.name + 'uploaded. Response: ');
          $window.location.replace("/usermain");
        } else {
          $window.alert('an error occured');
        }
      }, function(response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
        $window.alert('Error status: ' + resp.status);
      }, function(evt) {
        // Math.min is to fix IE which reports 200% sometimes
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    }

  }


})();
