function BooksController(book) {
  var ctrl = this;
  console.log(book.data[0].description);
}
angular
        .module('app')
        .controller('BooksController', BooksController);
