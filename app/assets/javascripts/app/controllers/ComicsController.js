function ComicsController(comics) {
  console.log("comics");

  var vm = this;
  vm.comics = this.comics;
}
angular
    .module('app')
    .controller('ComicsController', ComicsController);
