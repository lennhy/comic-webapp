function HomeController( ComicService) {
  // var ctrl = this;
  // ctrl.name = "ash";
  // ctrl.comics = comics;
  var ctrl = this;

    ComicService
        .httpGetAllComics()
        .then(function (res) {
            console.log(res);
        });

}
angular
        .module('app')
        .controller('HomeController', HomeController);
