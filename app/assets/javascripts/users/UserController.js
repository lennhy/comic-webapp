function UserController(Auth, UserService, FileService, $scope, user, Upload) {
  var vm = this;
  vm.user = user.data;

  currentUser = Auth.currentUser();

  vm.submit = function() {
    if (vm.user.avatar) {
      console.log(vm.user.avatar)
      vm.updateUser(vm.user.avatar, Upload);
    }
  }

  vm.updateUser = function(avatar, Upload) {
    // console.log(user.data.avatar)
    // vm.upload = function (image) {
    //   console.log(image)
    //
            Upload.upload({
                method: 'PATCH',
                url: '/users/' + vm.user.id + '/edit',
                data: { avatar }
      })
    // }
    //
    // UserService.httpUpdateUser(vm.user.id, vm.user)
    //    .then(function (res) {
    //         // console.log(res.data);
    //         // vm.upload = res.data.avatar;
    //         $('ul').prepend("<li>You have successfully uploaded a profile pic !</li>");
    //    },function(error){
    //          console.log(error)
    //          $('ul').append("<li>Looks like You are are missing something!</li>");
    //    })
    };

}

angular
        .module('app')
        .controller('UserController', UserController);
