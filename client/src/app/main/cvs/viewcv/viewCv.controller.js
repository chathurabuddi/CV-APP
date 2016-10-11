(function ()
{
    'use strict';

    angular
        .module('app.pages.viewCv',[])
        .controller('viewCv', viewCv);

    /** @ngInject */
    function viewCv($scope,$http,$location,$sce, $stateParams)
    {

        // Data
        $scope.helloText =  $location.search().path;


        $scope.cvpath = $sce.trustAsResourceUrl($location.search().path);

        // Methods

        //////////
    }
})();
