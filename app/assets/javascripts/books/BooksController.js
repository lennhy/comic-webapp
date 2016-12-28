function BooksController( $filter, BookService) {
  var vm = this;
  vm.search = '';

   BookService
      //  when this block is finished
      // executing we don't have the books data, we've just specified what to do
      // when we do eventually get it - or what to do if we fail to get it.
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

      // users can only upvote once
      vm.upVote = function(book){
        if(book.num === 1){
          book.num =1;
        }else{
          book.num +=1;
        }

      }

      // users can only downvote once
      vm.downVote = function(book){
        if(book.num === 0){
          book.num +=0;
        }else{
          book.num -=1;
        }

      }

}

angular
        .module('app')
        .controller('BooksController', BooksController);
