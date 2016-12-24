function BookService($http){

  this.httpGetAllBooks = function(){
    return $http.get('/comics.json');
    // resolve returns the data so don't need the callback
              // .then(handleResponse)
              // .catch(handleError);
  };

  // function handleResponse(response){
  //   console.log(response);
  // }
  //
  // function handleError(error){
  //   console.log(error);
  // }

  this.httpGetBook = function(id){
    return $http.get('/comics/'+ id);
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
