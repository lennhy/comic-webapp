function UsersController(allUsers) {
  var vm = this;
  vm.users = allUsers.data;
}

angular
        .module('app')
        .controller('UsersController', UsersController);
