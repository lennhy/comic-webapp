function ComicController(comic) {
  var vm = this;

  console.log(comic);

    vm.whatever = function () {
    ComicService.creatComic();
  }

  vm.update = function () {
    ComicService.updateComic();
  }

  vm.delete = function () {
    ComicService.deleteComic();
  }
}


angular
    .module('app')
    .controller('ComicController', ComicController);
