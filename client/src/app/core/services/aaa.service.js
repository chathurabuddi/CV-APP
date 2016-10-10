(function() {
  'use strict';

  angular
    .module('app.core').factory('AuthenticationService', AuthenticationService);

  function AuthenticationService($scope, $http) {

    var service = {};

    var usertype = 'applicant';

    service.userNow = function() {
      if (usertype === 'applicant') {
        return 0;
      } else {
        return 1;
      }
    };

    return service;
  }
})();
