function NewBookController(BookService, regions, genres) {
  var vm = this;
  vm.regions = regions.data;
  vm.genres = genres.data;
  vm.printBook;
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

    vm.createBook = function() {
      BookService
        //  before submit form
        .httpCreateBook(vm.book)
          .then(function (data) {
                $('ul').prepend("<li>You have successfully created a new comic!</li>");
                return vm.printBook = data;
          },function(error){
                console.log(error)
                $('ul').append("<li>Looks like You are are missing something!</li>");
            // $('ul').append("<li>" + error + "</li>");
            // success and error are special functions added to a promise by $http

            // success or error will be called later - when this block is finished
            // executing we don't have the name, we've just specified what to do
            // when we do eventually get it - or what to do if we fail to get it.
            // Promises are not actually complicated, they're objects that contain a
            // reference to functions to call when something fails or succeeds.

          })
    }
  }


angular
        .module('app')
        .controller('NewBookController', NewBookController);
