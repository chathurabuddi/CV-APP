(function ()
{
    'use strict';

    angular
        .module('app.pages.cvView')
        .controller('cvView', cvView);

    /** @ngInject */
    function cvView($scope,$http)
    {
      var data = $.param({
        "id": "company_name"
      });

      console.log(data);

      $http.post('/getCvList',{id:"send the company name here"}).success(function(response) {
        console.log(response);
        $scope.cvList = response;
      });

      //
      // $scope.cvList =[
      //  {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
      //  {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
      //  {'name':'sunimal','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
      //  {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
      //  {'name':'chamath','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
      //  {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
      //  {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'},
      //  {'name':'pasan','cv':'test','email':'pm@gmail.com','img':'assets/images/avatars/profile.jpg'}
      // ];


    }
})();
