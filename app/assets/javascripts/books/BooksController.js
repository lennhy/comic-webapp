function BooksController(books) {
  var vm = this;
  vm.books = books.data;
  vm.genres = books.data[0].genres;
  vm.regions = books.data[0].region;
  // console.log(book.data[0].description);
  // getBooks: getBooks
  // // createBook: createBook;
  //
  // function getBooks() {
  // //  return BookFactory.getBooks()
  // //       .then(setBooks)
  // }
  //
  // function setBooks(data){
  //   console.log(data)
  //   return vm.books = data
  // }
  // --------------------- DISPLAY BOOK -----------------------

}

angular
        .module('app')
        .controller('BooksController', BooksController);
