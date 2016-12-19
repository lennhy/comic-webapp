function ComicsController(comics) {
  var vm = this;
  vm.comics = comics;
}
angular
    .module('app')
    .controller('ComicsController', ComicsController);
