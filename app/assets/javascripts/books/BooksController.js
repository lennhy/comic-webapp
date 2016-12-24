function BooksController(books, $filter) {
  var vm = this;
  vm.books = books.data;
  vm.search = '';


  // vm.updateSearch = function(){
  //   if(vm.search === ''){
  //     vm.filteredList = vm.books;
  //   }else{
  //     vm.filteredBooks = vm.search;
  //     vm.filteredBooks = $filter('filter')(vm.books, vm.search);
  //   }
  // };
}

angular
        .module('app')
        .controller('BooksController', BooksController);
