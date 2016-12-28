function BookController(book, RatingService, $scope, $route) {
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
          if(data.status === 201 || data.status === 200){
            $('ul').prepend("<li>You have successfully rated this comic!</li>");
          }
          else if(data.status === 204 ){
            $('ul').prepend("<li>You have successfully updated the rating for this comic!</li>");
          }
        },function(error){
          console.log(error);
        })
   }

    function rateTotal(){
      var total = 0;
      var totalCount;
      // 5 stars multipy by the number of times someone clicked the rate button are the highest rating
      var highestNumOfRatings = vm.ratings.length * 5;

       vm.ratings.forEach(function(rating){
          total += rating.stars;
        })
         var avg = (total / highestNumOfRatings) * 5;
         if(avg === NaN){
           return "There are currently no ratings for this book"
         } else{
           return avg.toFixed(2);
         }
    }

}

angular
        .module('app')
        .controller('BookController', BookController);
