function NewBookController(BookService, FileService, regions, genres, $scope, $http, Upload) {
  var vm = this;
  var id;
  vm.regions = regions.data;
  vm.genres = genres.data;
  vm.page_attachments_attributes= [];
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
       page_attachments_attributes:[]
  };

  // SAVE MULTIPLE AND SINGLE FILE INPUTS TO VARIABLES
  $("#page_attachments_attributes").change(function(event){
    vm.page_attachments_attribute = event.target.files
    console.log("page attachments " + vm.book.page_attachments_attributes)
    console.log("page cover " + vm.book.cover)
  });

  vm.previewCover = function(div, displayDiv) {
    FileService
      .previewImg(div, displayDiv)
  }

  //  CREATE BOOK WITHOUT IMAGES VIA POST REQUEST
  vm.createBook = function() {
   BookService
     //  before submit form
     .httpCreateBook(vm.book)
       .then(function (res) {
         // console.log(res.data.id)
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

   // UPLOAD AND SAVE IMAGES TO BOOK
   vm.uploadPages = function() {
    if (vm.book.cover && vm.page_attachments_attribute) {
      console.log("This is the id "+id)
      BookService.updateBook(vm.book.cover, vm.page_attachments_attribute, id, Upload);
    }
  }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
