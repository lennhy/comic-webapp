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
    Upload.upload({
        method: 'PATCH',
        url: '/users/' + vm.user.id + '/edit',
        data: { avatar }
    })
  };

}

angular
        .module('app')
        .controller('UserController', UserController);
