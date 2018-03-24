function BookService($http){

  this.httpGetAllBooks = function(){
    return $http.get('/comics.json')
  };


  this.httpGetBook = function(id){
    return $http.get('/comics/'+ id);
  };

  this.httpCreateBook = function(data) {
    var req = {
     method: 'POST',
     url: '/comics',
     data: {comic:data},
     headers: {
       'Content-Type': 'application/json'
     }
    }
    return $http(req)
    .then(successCallback)
    .catch(errorCallback)

    function successCallback(data){
      return data;
    }

    function errorCallback(error){
      console.log(error)
    }
  }

  this.updateBook = function(cover, page_attachments_attributes, id, Upload) {
    Upload.upload({
        method: 'PATCH',
        url: '/pages/' + id + '/edit',
        // transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        },
        data: { cover, page_attachments_attributes }
    })
  };


  this.httpAdd = function(id){
    var req = {
     method: 'PATCH',
     url: '/comics/'+id,
     data: id
    }
    return $http(req);
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
