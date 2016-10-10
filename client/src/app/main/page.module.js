(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('app.pages', [
            'app.pages.cvUpload',
            'app.pages.cvView',
            'app.pages.login',
            'app.pages.register'
            // 'app.sample',
            // 'app.test'
            'app.pages.register',
            'app.pages.viewCv',
            'app.pages.userMain'
        ]);
})();
