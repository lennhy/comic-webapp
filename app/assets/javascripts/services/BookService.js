function BookService($http){

  this.httpGetAllBooks = function(){
    console.log("Jeeezee");
    return $http.get('/comics.json')
  };


  this.httpGetBook = function(id){
    return $http.get('/comics/'+ id);
  };

  this.httpCreateBook = function(data) {
    // console.log("Book Service "+JSON.stringify(data))
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
      // console.log(data)
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
  //
  // myApp.service('fileUpload', ['$https:', function ($https:) {
  //     this.uploadFileToUrl = function(file, uploadUrl){
  //        var fd = new FormData();
  //        fd.append('file', file);
  //
  //        $https:.post(uploadUrl, fd, {
  //           transformRequest: angular.identity,
  //           headers: {'Content-Type': undefined}
  //        })
  //
  //        .success(function(){
  //        })
  //
  //        .error(function(){
  //        });
  //     }
  //  }]);
}

angular
    .module('app')
    .service('BookService', BookService);
