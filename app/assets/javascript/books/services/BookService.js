function BookService($http){

  this.httpGetAllBooks = function(){
    return $http.get('/comics.json')
  };


  this.httpGetBook = function(id){
    return $http.get('/comics/'+ id);
  };


  this.updateBook = function(cover, page_attachments_attributes, id, Upload) {
    console.log("What is happening in the BookService " + page_attachments_attributes)
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
