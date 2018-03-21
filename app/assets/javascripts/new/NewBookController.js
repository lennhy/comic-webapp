function NewBookController(BookService, FileService, regions, genres, $scope, $http, Upload) {
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
       cover: {},
       genre_ids: [],
       pages: []
  };

 var id;
  $("#myFileField").change(function(){
    //submit the form here
    console.log("Outside NewBook Controller " + fileModel)
  });

  vm.previewCover = function(div, displayDiv) {
    FileService
      .previewImg(div, displayDiv)
  }
  vm.createBook = function() {
   BookService
     //  before submit form
     .httpCreateBook(vm.book)
       .then(function (res) {
         console.log(res.data.id)
         id = res.data.id;
         var arr=[];
            for(let i=0; i < res.data.comic.pages.length; i++){
              arr.push(res.data.comic.pages[i].image);
            };
            vm.upload = arr;
            $('ul').prepend("<li>You have successfully created a new comic!</li>");
       },function(error){
            console.log(error)
            $('ul').append("<li>Looks like You are are missing something!</li>");
       })
   }

   vm.uploadPages = function() {
     if (vm.book.cover && vm.book.pages) {
       console.log(vm.book.cover, vm.book.pages)
       BookService.updateBook(vm.book.cover, vm.book.pages, id, Upload);
     }
   }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
