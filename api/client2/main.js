// angular.module('fileUpload', ['ngFileUpload'])
// .controller('MyCtrl',['Upload','$window',function(Upload,$window){
//     var vm = this;
//     vm.submit = function(){ //function to call on form submit
//         if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
//             vm.upload(vm.file,vm.name); //call upload function
//         }
//     }
//
//     vm.upload = function (file,data) {
//         Upload.upload({
//             url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
//             data:{file:file,mydata:data,data2:"hello3"}, //pass file as data, should be user ng-model
//
//         }).then(function (resp) { //upload function returns a promise
//             if(resp.data.error_code === 0){ //validate success
//                 $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
//             } else {
//                 $window.alert('an error occured');
//             }
//         }, function (resp) { //catch error
//             console.log('Error status: ' + resp.status);
//             $window.alert('Error status: ' + resp.status);
//         }, function (evt) {
//             console.log(evt);
//             var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//             console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
//             vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
//         });
//     };
// }]);



//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout','$window','$http', function ($scope, Upload, $timeout,$window,$http) {
    $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'http://localhost:3000/upload',
      data: {username: $scope.user.name,email: $scope.user.email,phone: $scope.user.phone, file: file},
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
      if(response.data.error_code === 0){ //validate success
            $window.alert('Success ' + response.config.data.file.name + 'uploaded. Response: ');
      } else {
            $window.alert('an error occured');
      }
    },function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
        $window.alert('Error status: ' + resp.status);
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }

    // $scope.companylist = ["Emil", "Tobias", "Linus"];
    $http.get('/companylist').success(function(response){
          $scope.companylist = response;
     });

     $scope.contactlist = [
  {
    "_id": "57a9cc1c91380d34231dc499",
    "name": "Tom",
    "email": "test@gmail.com",
    "number": "/server/uploads/file-1473539077647.pdf"
  },
  {
    "_id": "57a9ccac91380d34231dc49b",
    "name": "kasun66",
    "email": "test@gmail.com",
    "number": "(123-123-23-233)"
  },
  {
    "_id": "57a9e636287b4334d29c2735",
    "name": "asdas",
    "email": "asdas",
    "number": "asdasd"
  },

];


}]);
