function BookService($http){

  this.httpGetAllBooks = function(){
    return $http.get('/comics');
  };

  this.httpGetBook = function(id){
    return $http.get(`/comics/${id}`);
  };


  this.httpCreateBook = function(data) {
    console.log(data,$http);
    var req = {
     method: 'POST',
     url: '/comics',
     data: data
    }
    return $http(req);
  }
  function successCallback(data){
    console.log(data)
  }
  function errorCallback(error){
    console.log(error)
  }


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
