(function ()
{
    'use strict';

    angular
        .module('app.pages.viewCv')
        .controller('viewCv', viewCv);

    /** @ngInject */
    function viewCv($scope,$http,$location)
    {

        // Data
        $scope.helloText =  $location.search().path;

        // Methods

        //////////
    }
})();
