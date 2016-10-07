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
        icon: 'comment',
        sref: '.comments'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Companies',
        icon: 'work',
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
