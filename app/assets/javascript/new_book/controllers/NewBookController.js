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
  });

  vm.previewCover = function(div, displayDiv) {
    FileService
      .previewImg(div, displayDiv)
  }

  //  CREATE BOOK WITHOUT IMAGES VIA POST REQUEST
  vm.createBook = function() {

   document.getElementById("menu-bar").style.display = "none";
   document.getElementById("create-book").disabled = true;

   document.getElementById("cover").disabled = false;
   document.getElementById("page_attachments_attributes").disabled = false;
   document.getElementById("upload-images").disabled = false;

   BookService
     //  before submit form
     .httpCreateBook(vm.book)
       .then(function (res) {
         id = res.data.id;
         var arr=[];
            for(let i=0; i < res.data.comic.pages.length; i++){
              arr.push(res.data.comic.pages[i].image);
            };
        document.getElementById('#message').prepend("<li>You have successfully created a new comic!</li>");
       },function(error){
            document.getElementById('#message').append("<li>Looks like You are are missing something!</li>");
       })
   }

   // UPLOAD AND SAVE IMAGES TO BOOK
   vm.uploadPages = function() {
     document.getElementById("menu-bar").style.display = "block";
    if (vm.book.cover && vm.page_attachments_attribute) {
      BookService.updateBook(vm.book.cover, vm.page_attachments_attribute, id, Upload);
    }
  }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
