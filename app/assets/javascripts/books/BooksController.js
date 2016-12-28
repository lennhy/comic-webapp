function BooksController(books, $filter) {
  var vm = this;
  vm.books = books.data;
  vm.search = '';

  // vm.bookVote = function(){
  //
  // }



  vm.vote = function(book){
    book.num +=1
  }


}


angular
        .module('app')
        .controller('BooksController', BooksController);
