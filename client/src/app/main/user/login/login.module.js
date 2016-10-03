(function ()
{
    'use strict';

    angular
        .module('app.pages.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_login', {
            url      : '/login',
            views    : {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController'
                },
                'content@app.pages_login': {
                    templateUrl: 'app/main/user/login/login.html',
                    controller : 'LoginController'
                }
            },
            bodyClass: 'login'
        });

        // Translation
        //$translatePartialLoaderProvider.addPart('app/main/pages/auth/login');

    }

})();
