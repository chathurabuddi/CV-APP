(function() {
  'use strict';

  angular
    .module('app.pages.cvUpload')
    .controller('CVUpload', CVUpload);

  /** @ngInject */
  function CVUpload($scope, $element) {
    $scope.list = ['test', 'rrr', 'ffff'];
    $scope.companies = ['WSO2', '99X', 'MIT', 'Cambio', 'IFS', 'Code Gen'];
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
    $scope.formData={};
  $scope.formData.selected=[];

    $scope.sendForm= function(){
      //console.log($scope.formData.selected.length);
      if($scope.formData.selected.length!=3){
        toastr.error("Please select 3 companies");
      }
      console.log($scope.formData);
      console.log($scope.formData.selected);
    }

  }

})();
