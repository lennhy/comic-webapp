function NewBookController(BookService, regions, genres, $scope, Upload, $http) {
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
       genre_ids: [],
       pages: []
  };

  vm.createBook = function() {
     BookService
       //  before submit form
       .httpCreateBook(vm.book)
         .then(function (res) {
           var arr=[];
              for(let i=0; i < res.data.comic.pages.length; i++){
                arr.push(res.data.comic.pages[i].url);
              };
              vm.upload = arr;
              console.log(res);
              $('ul').prepend("<li>You have successfully created a new comic!</li>");
         },function(error){
               console.log(error)
               $('ul').append("<li>Looks like You are are missing something!</li>");
         })
   }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
