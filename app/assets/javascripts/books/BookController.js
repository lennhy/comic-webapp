function BookController(book) {
  console.log(book.data)
  var vm = this;
  vm.book = book.data;

}

angular
        .module('app')
        .controller('BookController', BookController);
