function BookController(book, RatingService) {
  console.log(book.data)
  var vm = this;
  vm.book = book.data;
  vm.rating_star = null;
  var bookId = book.data.id;

    vm.createRating = function() {
      RatingService
        //  before submit form
          .httpCreateRating(vm.rating_star, bookId)
          // after submit form
          .then(function (data) {
              console.log(data);
              return vm.rating = data;
          },function(error){
            console.log(error.messages);
          })
    }
  }


angular
        .module('app')
        .controller('BookController', BookController);
