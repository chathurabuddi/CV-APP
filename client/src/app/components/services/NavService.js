(function(){
  'use strict';

  angular.module('cvapp')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Comments',
        icon: 'dashboard',
        sref: '.comments'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Companies',
        icon: 'view_module',
        sref: '.companies'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
