function NewBookController(BookService, regions, genres) {
  var vm = this;
  vm.regions = regions.data;
  vm.genres = genres.data;

  vm.book = {
    title: '',
    description: '',
    issue:'',
    volume:'',
    page_count:'',
    issue_date:'',
    graphic_novel:'',
    region_id: null,
    // genre_ids: []
  };

  // Api call to post comics
    vm.createBook = function() {
      BookService
        //  before submit form
        .httpCreateBook(vm.book)
          // after submit form
          .then(function (data) {
              console.log(data);
                $('ul').append("<li>You have successfully created a new comic!</li>");
              // return vm.book = data;
          },function(error){
            console.log(error)
            $('ul').append("<li>"+error+"</li>");
            // $('ul').append("<li>" + error + "</li>");
          })
    }
  }


angular
        .module('app')
        .controller('NewBookController', NewBookController);
