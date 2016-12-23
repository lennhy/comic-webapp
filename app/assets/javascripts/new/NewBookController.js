function NewBookController(BookService, regions, genres, $scope) {
  var vm = this;
  vm.regions = regions.data;
  vm.genres = genres.data;
  console.log($scope);

  vm.book = {
    title: '',
    description: '',
    issue:'',
    volume:'',
    page_count:'',
    issue_date:'',
    graphic_novel:'',
    region_id: null,
    genre_ids: []
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
