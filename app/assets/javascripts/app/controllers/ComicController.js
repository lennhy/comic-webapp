function ComicController(comic) {
  var vm = this;

  console.log(comic);

  vm.create = function () {
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
