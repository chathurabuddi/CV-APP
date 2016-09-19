(function ()
{
    'use strict';

    angular
        .module('app.pages.cvView', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.cvview', {
                url    : '/cvs',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cvs/cvViews.html',
                        controller : 'cvView'
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

        msNavigationServiceProvider.saveItem('cvapp.cvview', {
            title    : 'CV\'s',
            icon     : 'icon-tile-four',
            state    : 'app.cvview',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 0
        });
    }
})();
