(function ()
{
    'use strict';

    angular
        .module('app.pages.cvUpload')
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.cvupload', {
                url    : '/cvupload',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cvs/uploadcv/cvUpload.html',
                        controller : 'CVUpload'
                    }
                },
            });


        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('cvapp', {
            title : 'CV',
            group : true,
            weight: 0
        });

        msNavigationServiceProvider.saveItem('cvapp.cvupload', {
            title    : 'Upload CV',
            icon     : 'icon-tile-four',
            state    : 'app.cvupload',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();
