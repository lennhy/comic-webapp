function NewBookController(BookService) {
  var vm = this;
  vm.book = {
    title: '',
    description: '',
    issue:'',
    volume:'',
    page_count:'',
    issue_date:'',
    graphic_novel:'',
    region_id: ''
  };

  vm.createBook = function() {
    console.log(vm.book)

      BookService
        //  before submit form
        .httpCreateBook(vm.book)
          // after submit form
          .then(function (data) {
              alert(data.status);
              return vm.book = data;
          },function(error){
            console.log(error);
          })
     }

}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
