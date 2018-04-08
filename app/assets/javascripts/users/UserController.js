function UserController(Auth, UserService, FileService, $scope, user, Upload) {
  var vm = this;
  vm.user = user.data;

  currentUser = Auth.currentUser();

  // vm.bookPublisher = function(curUser){
  //   console.log(curUser)
  //   for(let i=0; vm.book.users.length; i++){
  //     if(vm.book.users[i].id === curUser.id && vm.book.users[i].role === "publisher"){
  //       return true;
  //     }
  //   }
  // }
  //
  vm.uploadAvatar = function() {
    if (vm.user.avatar) {
      vm.updateUser(vm.user.avatar, Upload);
    }
  }

  vm.updateUser = function(avatar, Upload) {
    Upload.upload({
        method: 'PATCH',
        url: '/avatar/' + vm.user.id + '/edit',
        data: { avatar }
    })
  };

}

angular
      .module('app')
      .controller('UserController', UserController);
