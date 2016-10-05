(function ()
{
    'use strict';

    angular
        .module('app.pages.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_register', {
            url      : '/register',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController'
                },
                'content@app.pages_register': {
                    templateUrl: 'app/main/user/register/register.html',
                    controller : 'RegisterController'
                }
            },
            bodyClass: 'register'
        });


    }

})();
