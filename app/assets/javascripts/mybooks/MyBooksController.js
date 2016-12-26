function MyBooksController() {
  var vm = this;
  vm.books = books.data;
  

}
angular
        .module('app')
        .controller('MyBooksController', MyBooksController);
