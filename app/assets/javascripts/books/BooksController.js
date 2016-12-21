function BooksController(book) {
  var vm = this;
  console.log(book.data[0].description);


  // --------------------- DISPLAY BOOK -----------------------

}

angular
        .module('app')
        .controller('BooksController', BooksController);
