function BooksController(books) {
  var vm = this;
  vm.books = books.data;
  vm.genres = books.data[0].genres;
  vm.regions = books.data[0].region;
  vm.create = create;
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
  // vm.title = ''; // vm is bound to an input via `ng-model`
  // vm.description ='';
  // vm.issue ='';
  // vm.volume ='';
  // vm.page_count ='';
  // vm.issue_date ='';
  // vm.graphic_novel ='';
  //
  // vm.createBook = createBook;
  //
  // function createBook(title, description, issue, volume, page_count, issue_date, graphic_novel) {
  //     // BookService
  //     //   .httpCreateBook(vm.title, vm.description, vm.issue, vm.volume, vm.page_count, vm.issue_date, vm.graphic_novel)
  //     //     .then(function (data) {
  //     //         alert(data.status);
  //     //         return vm.books = data;
  //     //     }),function(error){
  //     //        //handle what happens if there is an error with the http post call
  //     //        console.log("Error occurred: " + error);
  //     //     }
  //     var req= {
  //       method: 'POST',
  //       url:'/comics',
  //       headers: {
  //           'Content-Type': undefined
  //       },
  //       data:{ content }
  //     }
  //     return $http
  // }
}

angular
        .module('app')
        .controller('BooksController', BooksController);
