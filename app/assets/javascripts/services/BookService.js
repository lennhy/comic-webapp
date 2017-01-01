function BookService($http){

  // success and error are functions on a promise that AngularJS adds for
  // us when using $http or $resource. They're not standard, you won't
  //  find them on other promises.
  //
  // When you are using a promise, the function you should call is then.
  // then takes two parameters - a callback function for success and a
  // callback function for failure.
  this.httpGetAllBooks = function(){
    console.log("d");
    return $http.get('/comics.json')
        // returns a promise
        // What to do when the request succeeds
        // Success
      //   .then(function (books){
      //     var getBooks = books.data;
      //         for(var i=0; i < getBooks.length; i++){
      //             books[i].num = 0;
      //         }
      //      vm.books = getBooks;
      //    },function(error){
      //            console.log(error)
      // });
        // .then(function (data) {
        //   console.log(data)
        //     for(var i=0; i < data.length; i++){
        //         data[i].num = 0;
        //   }
        // // what to do when the request fails
        // // failure
        // },function(error){
        //   console.log(error)
        //
        // })
        // success and error are special functions added to a promise by $http

        // success or error will be called later - when this block is finished
        // executing we don't have the books data, we've just specified what to do
        // when we do eventually get it - or what to do if we fail to get it.
  };


  this.httpGetBook = function(id){
    return $http.get('/comics/'+ id);

  };

  this.httpCreateBook = function(data) {
    console.log(data)
    var req = {
     method: 'POST',
     url: '/comics',
     data: data,
     headers: {
       'Content-Type': 'application/json'
     }
    }
    return $http(req);

  // returns a promise
  // What to do when the request succeeds
  // Success
    function successCallback(data){
      console.log(data)
    }
    // what to do when the request fails
    // failure
    function errorCallback(error){
      console.log(error)
    }
}
  // success and error are special functions added to a promise by $http

  // success or error will be called later - when this block is finished
  // executing we don't have the name, we've just specified what to do
  // when we do eventually get it - or what to do if we fail to get it.
  // Promises are not actually complicated, they're objects that contain a
  // reference to functions to call when something fails or succeeds.

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
