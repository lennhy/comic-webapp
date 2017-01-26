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
     images: [],
     genre_ids: []
   };

//   var inputElement = document.getElementById("upload");
//   inputElement.addEventListener("change", handleFiles, false);
//
//   function handleFiles() {
//
//     var preview = document.getElementById('preview');
//     // this is the file object being passed in from the file input value
//     var numFiles = this.files.length;
//
//     if(numFiles !== 0 || numFiles !== null){
//       for(let i=0; i < numFiles; i++){
//         var file = this.files[i];
//         vm.book.images.push(this.files[i]);
//
//       var img = document.createElement("img");
//       img.classList.add("obj");
//       img.file = file;
//       // console.log(img.file);
//       preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
//       // console.log(vm.book.images);
//
//       var reader = new FileReader();
//       // event handle triggered after the reading of the file has been successfully commpleted
//           reader.onload = (function(aImg) {
//             return function(e) {
//               aImg.src = e.target.result;
//              };
//            })(img);
//           reader.readAsDataURL(file);
//       }
//     }
// }

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
