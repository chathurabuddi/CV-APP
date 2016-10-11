(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('cvapp', [

            // Core
            'app.core',
            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',

            // pages
            'app.pages'
        ]);
})();
