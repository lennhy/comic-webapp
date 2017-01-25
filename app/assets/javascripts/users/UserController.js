function UserController(Auth, UserService, Upload, $scope, user) {
  var vm = this;
  var user = user.data;
  console.log(user.id);
  currentUser = Auth.currentUser();
  vm.currentUser = currentUser;

  $scope.submit = function() {
    if ($scope.form.file.$valid && $scope.file) {
      // console.log($scope.file);
      $scope.upload($scope.file, user.id);
    }
  };
//   // Upload Picture on file select or drop
//   // vm.upload = function (file) {
//   //   Upload.upload({
//   //     url: 'posts/' + post.id + '.json',
//   //     method: 'PUT',
//   //     headers: { 'Content-Type': false },
//   //     fields: {
//   //       'post[title]': post.title,
//   //       'post[body]': post.body,
//   //       'post[image]': file
//   //     },
//   //     file: file,
//   //     sendFieldsAs: 'json'
//   //   }).then(function (resp) {
//   //     console.log('Success ' + resp.config.file.name + 'uploaded. Response: ' + resp.data);
//   //   }, function (resp) {
//   //     console.log('Error status: ' + resp.status);
//   //   }, function (evt) {
//   //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//   //     console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
//   //   });
//   // };
//
  // upload on file select or drop
  $scope.upload = function (file, id) {
      Upload.upload({
          url: 'users/' + id,
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          data: {user:
            { avatar:file }
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
