function NewBookController(BookService) {
  var vm = this;

  vm.title = ''; // vm is bound to an input via `ng-model`
  vm.description ='';
  vm.issue ='';
  vm.volume ='';
  vm.page_count ='';
  vm.issue_date ='';
  vm.graphic_novel ='';

  vm.createBook = createBook;

  function createBook() {
      BookService
        .httpCreateBook(vm.title, vm.description, vm.issue, vm.volume, vm.page_count, vm.issue_date, vm.graphic_novel)
          .then(function (data) {
              alert(data.status);
              return vm.books = data;
          });
  }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
