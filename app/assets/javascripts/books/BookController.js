function BookController(book, RatingService, $scope, $route) {
  var vm = this;
  vm.book = book.data;
  vm.ratings = vm.book.ratings;
  vm.rating_star = null;
  vm.rateTotal = rateTotal();

  var bookId = book.data.id;

  function reloadData(){
    $route.reload();
  }

  vm.createRating = function() {
    RatingService
      //  before submit form
        .httpCreateRating(vm.rating_star, bookId)
        // after submit form
        .then(function (data) {
          reloadData();
          if(data.status === 201){
            $('ul').append("<li>You have successfully rated this comic!</li>");
          }
        },function(error){
          console.log(error.messages);
        })
   }

    function rateTotal(){
      var total = 0;
      var totalCount;
      var highestNumOfRatings = vm.ratings.length * 5;

       vm.ratings.forEach(function(rating){
          total += rating.stars;
        })
         var avg = (total / highestNumOfRatings) * 5;
         return avg.toFixed(2);
    }

}

angular
        .module('app')
        .controller('BookController', BookController);
