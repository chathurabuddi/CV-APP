(function ()
{
    'use strict';

    angular
        .module('app.pages.sample')
        .controller('SampleController', SampleController);

    /** @ngInject */
    function SampleController(SampleData,$scope)
    {
              // Data
        $scope.helloText = SampleData.data.helloText;

        // Methods

        //////////
    }
})();
