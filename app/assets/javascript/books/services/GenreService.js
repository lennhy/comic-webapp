function GenreService($http){

  this.httpGetGenres = function(){
    return $http.get('/genres')
  }
}
angular
    .module('app')
    .service('GenreService', GenreService);
