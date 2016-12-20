function ComicsController(comics) {
  var ctrl = this;
  ctrl.name = "ash";
  ctrl.comics = comics;
}
angular
        .module('app')
        .controller('ComicsController', ComicsController);
