(function() {
  'use strict';

    function BookFactory($http) {
        return {
          getBooks: getBooks,
          createBook: createBook
        }

        function getBooks(){
            return $http.get('/comics')
                .then(handleResponse)
                .catch(handleError);
        }

        // function createBook(){
        //
        // }

        function handleResponse(response){
            console.log(response)
            return response.data
        }

        function handleError(error){
            console.log(error)
        }


    }
      angular
        .module('app')
        .factory('BookFactory', BookFactory);
}());
