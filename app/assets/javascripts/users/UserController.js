function UserController(allUsers) {
  console.log(allUsers);
  var vm = this;
  vm.users = allUsers.data;

}

angular
        .module('app')
        .controller('UserController', UserController);
