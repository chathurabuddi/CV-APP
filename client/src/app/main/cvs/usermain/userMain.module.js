(function ()
{
    'use strict';

    angular
        .module('app.pages.userMain', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.userMain', {
                url    : '/usermain',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cvs/usermain/userMain.html',
                        controller : 'userMain'
                    }
                },
            });


        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'Home',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.userMain', {
            title    : 'Home',
            icon     : 'icon-tile-four',
            state    : 'app.userMain',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();
