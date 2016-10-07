(function() {
  'use strict';

  angular
    .module('app.pages.cvUpload')
    .controller('CVUpload', CVUpload);

  /** @ngInject */
  function CVUpload($scope, $element) {
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

  }

})();