(function ()
{
    'use strict';

    angular
        .module('app.test', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.test', {
                url    : '/test',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/test/test.html',
                        controller : 'test'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('sample@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/sample');

        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'test',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.test', {
            title    : 'test',
            icon     : 'icon-tile-four',
            state    : 'app.sample',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();
