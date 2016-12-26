function UserController(allUsers) {
  console.log(allUsers);
  var vm = this;
  vm.users = allUsers.data;
  // vm.books = books.data;
  // vm.user = currentUser;

}

angular
        .module('app')
        .controller('UserController', UserController);
