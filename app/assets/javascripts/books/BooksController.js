function BooksController( $filter, BookService) {
  var vm = this;
  vm.search = '';

     BookService
       .httpGetAllBooks()
           .then(function (books){
             var getBooks = books.data;
                 for(var i=0; i < getBooks.length; i++){
                     getBooks[i].num = 0;
                 }
              vm.books = getBooks;
            },function(error){
                    console.log(error)
         });


  vm.vote = function(book){
    book.num +=1
  }


}


angular
        .module('app')
        .controller('BooksController', BooksController);
