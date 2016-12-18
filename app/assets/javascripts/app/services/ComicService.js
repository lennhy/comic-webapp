function ComicService($http){
  var commonUrl ='';

  this.httpGetAllComics = function(){
    return $http.get('.json');
  };

  this.httpGetComic = function(id){
    return $http.get(`${id}.json`);
  };

  this.httpCreateComic = function(id){
    return $http.post();
  };

  this.httpUpdateComic = function(id){
    return $http.patch();
  };

  this.httpDeleteComic = function(id){
    return $http.delete();
  };

}
angular
    .module('app')
    .service('ComicService', ComicService);
