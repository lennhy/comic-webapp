function BooksController(books, $filter) {
  var vm = this;
  vm.books = books.data;
  vm.search = '';

  if(vm.search == ''){
    vm.filteredList = vm.books;
  }
  vm.updateSearch = function(){
    vm.filteredBooks = $filter('filter')(vm.books, vm.search);
  };
}

angular
        .module('app')
        .controller('BooksController', BooksController);
