(function ()
{
    'use strict';

    angular
        .module('app.pages.cvView')
        .controller('cvView', cvView);

    /** @ngInject */
    function cvView($scope)
    {
      $scope.cvList =[
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
        {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'}
      ];
    }
})();
