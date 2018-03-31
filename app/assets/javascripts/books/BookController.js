function BookController(book, RatingService, BookService, $scope, $route) {
  var vm = this;
  vm.book = book.data;
  vm.ratings = vm.book.ratings;
  vm.rating_star = null;
  vm.rateTotal = rateTotal();
  let currentImage = document.getElementById("image")
  let currentPageId = document.getElementById("page")
  let currentPage = parseInt(currentPageId.getAttribute("data-page-number"));
  let bookId = book.data.id;


  vm.deleteBook = function(){
    BookService
        .httpDeleteBook(bookId)
  }

  vm.goToPreviousPage = function (){
    if(currentPage > 0){
        currentPage -=1;
        currentImage.src = vm.book.page_attachments[currentPage].page.url
    }
  }

  vm.goToNextPage = function(){
    if(currentPage < vm.book.page_attachments.length-1){
        currentPage +=1;
        currentImage.src = vm.book.page_attachments[currentPage].page.url
    }
  }

  let prevButton = document.getElementById("#prev");
  let nextButton = document.getElementById("#next");

  // ================ END OF DOUBLE LINKED LIST (IMAGE CAROUSEL) ==================


  vm.add = function(id){
    console.log(id)
    BookService
      .httpAdd(bookId)
        .then(function (data) {
          console.log(status)
          if(data.status === 'ok') {
            $('ul').prepend("<li>You have successfully added a new comic to your account!</li>");
          }else{
            $('ul').prepend("<li>You already have this comic in your account!</li>");
          }
        },function(error){
        console.log(error);
    });
  }

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
