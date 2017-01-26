function UserController(Auth, UserService, Upload, $scope, user) {
  var vm = this;
  var user = user.data;
  currentUser = Auth.currentUser();
  vm.currentUser = currentUser;
  vm.avatar = user.avatar;
  $scope.submit = function() {
    if ($scope.form.file.$valid && $scope.file) {
      // console.log($scope.file);
      $scope.upload($scope.file, user.id);
    }
  };

  // upload on file select or drop
  $scope.upload = function (file, id) {
      Upload.upload({
          url: 'users/' + id,
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          data: {
            user: {
              avatar: file
             }
          },
          fileFormDataName: 'user[avatar]'
      }).then(function (resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      }, function (err) {
          console.log('Error status: ' + err.status);
      });
  };
}

angular
        .module('app')
        .controller('UserController', UserController);
