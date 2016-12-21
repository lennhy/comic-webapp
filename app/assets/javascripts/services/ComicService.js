function ComicService($http){

  this.httpGetAllComics = function(){
    return $http.get('/comics.json');
  };

  this.httpGetComic = function(id){
    return $http.get(`/comics/${id}`);
  };

  this.httpCreateComic = function(id){
    return $http.post('/comics');
  };

  this.httpUpdateComic = function(id){
    return $http.patch(`/comics/${id}`);
  };

  this.httpDeleteComic = function(id){
    return $http.delete(`/comics/${id}`);
  };

}
angular
    .module('app')
    .service('ComicService', ComicService);
