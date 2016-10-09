(function() {
  'use strict';

  angular
    .module('app.pages.cvUpload',['ngFileUpload'])
    .controller('CVUpload', CVUpload);

  /** @ngInject */
  function CVUpload($scope, $element,Upload, $timeout,$window,$http) {
    $scope.companies = [{
      name: 'MIT',
      catv: true,
      cat: ['SE', 'BA', 'QA','PM'],

    }, {
      name: '99X',
      catv: true,
      cat: ['SE', 'BA', 'QA'],

    }, {
      name: 'Caklabs',
      catv: false,
      cat: [],

    }];

    $scope.searchTerm;
    $scope.clearSearchTerm = function() {
      $scope.searchTerm = '';
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
          if($scope.selectedObject.catv==false){
            $scope.formData.position1="";
          }
          $scope.secondpre = true;
        }
      }
    });

    $scope.$watch('formData.company2', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company2) {
          $scope.selectedObject1 = $scope.companies[i];
          if($scope.selectedObject1.catv==false){
            $scope.formData.position2="";
          }
          $scope.thirdpre=true;

        }
      }
    });
    $scope.$watch('formData.company3', function() {
      for (var i = 0; i < $scope.companies.length; i++) {
        if ($scope.companies[i].name == $scope.formData.company3) {
          $scope.selectedObject2 = $scope.companies[i];
          if($scope.selectedObject2.catv==false){
            $scope.formData.position3="";
          }

        }
      }
    });


    $scope.sendForm = function() {

      //console.log($scope.formData.selected.length);
      console.log($scope.formData);
    }

    $scope.uploadPic = function(file) {
      console.log(file);
      file.upload = Upload.upload({
        url: 'http://localhost:3000/upload',
        data: {
          file: file
        },
      });

      file.upload.then(function(response) {
        $timeout(function() {
          file.result = response.data;
        });
        if (response.data.error_code === 0) { //validate success
          $window.alert('Success ' + response.config.data.file.name + 'uploaded. Response: ');
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
