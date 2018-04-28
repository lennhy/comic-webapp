function NewBookService($http){

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
}

angular
    .module('app')
    .service('BookService', BookService);
