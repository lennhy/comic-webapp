function HomeController( ComicService) {
  // var ctrl = this;
  // ctrl.name = "ash";
  // ctrl.comics = comics;
  var ctrl = this;

    ComicService
        .httpGetAllComics()
        .then(function (res) {
            ctrl.data = res.data.description; // our user object is populated from the backend
            console.log(ctrl.data);
        });

}
angular
        .module('app')
        .controller('HomeController', HomeController);
