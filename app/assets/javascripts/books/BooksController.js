function BooksController(books, $filter) {
  var vm = this;
  vm.books = books.data;
  vm.search = '';
}

angular
        .module('app')
        .controller('BooksController', BooksController);
