(function ()
{
    'use strict';

    angular
        .module('app.test')
        .controller('test', test);

    /** @ngInject */
    function test(SampleData,$scope,$http)
    {
              // Data
        $scope.helloText = SampleData.data.helloText;

        $http.get('/currentuser').then(function(result){
          $scope.currentU = result.data;
          console.log($scope.currentU);
        });

    }
})();
