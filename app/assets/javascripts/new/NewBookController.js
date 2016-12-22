function NewBookController(BookService, regions) {
  var vm = this;
  vm.regions = regions.data;
  console.log(vm.regions)

  vm.book = {
    title: '',
    description: '',
    issue:'',
    volume:'',
    page_count:'',
    issue_date:'',
    graphic_novel:'',
    region_id: null
  };

  // Api call to post comics
  vm.createBook = function() {
      BookService
        //  before submit form
        .httpCreateBook(vm.book)
          // after submit form
          .then(function (data) {
              alert(data.status);
              return vm.book = data;
          },function(error){
            console.log(error.messages);
          })
  }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
