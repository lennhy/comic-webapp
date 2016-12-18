function ComicService($http){
  var commonUrl ='';

  this.getAllComics = function(){
    return $http.get('.json');
  };

  this.getComic = function(id){
    return $http.get(`${id}.json`);
  };

  this.postComic = function(id){
    return $http.post();
  };

  this.updateComic = function(id){
    return $http.patch();
  };

  this.deleteComic = function(id){
    return $http.delete();
  };

}
angular
    .module('app')
    .service('ComicService', ComicService);
