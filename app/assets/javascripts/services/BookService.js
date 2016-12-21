function BookService($http){

  this.httpGetAllBook = function(){
    return $http.get('/comics.json');
  };

  this.httpGetBook = function(id){
    return $http.get(`/comics/${id}`);
  };

  this.httpCreateBook = function(id){
    return $http.post('/comics');
  };

  this.httpUpdateBook = function(id){
    return $http.patch(`/comics/${id}`);
  };

  this.httpDeleteBook = function(id){
    return $http.delete(`/comics/${id}`);
  };

}
angular
    .module('app')
    .service('BookService', BookService);
