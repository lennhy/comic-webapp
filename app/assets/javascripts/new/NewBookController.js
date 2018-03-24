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

  $("#page_attachments_attributes").change(function(event){
    console.log(event.target.files)
    vm.page_attachments_attribute = event.target.files
    // console.log("files yea "+event.target.files[]);
    console.log("page attachments " + vm.book.page_attachments_attributes)
    console.log("page cover " + vm.book.cover)

    // for(let i=0; i<event.target.files.length; i++){
    //   // vm.book.page_attachments.push(event.target.files[i]);
    //    // console.log(event.target.files[i])
    //    arr.push(event.target.files[i])
    //  }
     // vm.book.page_attachments = arr;
     // console.log(vm.book.page_attachments)

    // submit the form here
    console.log("Outside NewBook Controller " + vm.book.pages)
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

   // vm.uploadPages = function() {
   //   if (vm.book) {
   //     // console.log(vm.book.cover, vm.book.pages)
   //     // BookService.updateBook(vm.book.cover, vm.book.page_attachments, id, Upload);
   //     BookService.createBook(vm.book);
   //
   //   }
   // }
   vm.uploadPages = function() {
    if (vm.book.cover && vm.page_attachments_attribute) {
      console.log(vm.page_attachments_attribute)
      BookService.updateBook(vm.book.cover, vm.page_attachments_attribute, id, Upload);
    }
  }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
