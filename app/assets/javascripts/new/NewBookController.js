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
          }),function(error){
             //handle what happens if there is an error with the http post call
             console.log("Error occurred: " + error);
          }
  }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
