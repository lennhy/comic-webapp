function BookController(book, RatingService, $scope) {
  var vm = this;
  vm.book = book.data;
  vm.ratings = vm.book.ratings;
  vm.rating_star = null;
  vm.rateTotal = rateTotal();

  var bookId = book.data.id;

  vm.createRating = function() {
    RatingService
      //  before submit form
        .httpCreateRating(vm.rating_star, bookId)
        // after submit form
        .then(function (data) {
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
