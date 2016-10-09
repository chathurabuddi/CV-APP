(function ()
{
    'use strict';

    angular
        .module('app.pages.viewCv', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.viewCv', {
                url    : '/viewcv',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cvs/viewcv/viewCv.html',
                        controller : 'viewCv'
                    }
                },
            });


        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);

        // Navigation
        // msNavigationServiceProvider.saveItem('fuse', {
        //     title : 'viewCv',
        //     group : true,
        //     weight: 1
        // });
        // 
        // msNavigationServiceProvider.saveItem('fuse.viewCv', {
        //     title    : 'Sample',
        //     icon     : 'icon-tile-four',
        //     state    : 'app.viewCv',
        //     /*stateParams: {
        //         'param1': 'page'
        //      },*/
        //     weight   : 1
        // });
    }
})();
