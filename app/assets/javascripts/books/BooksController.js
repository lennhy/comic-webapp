function BooksController(books) {
  var vm = this;
  vm.books = books.data;
  vm.genres = books.data[0].genres;
  vm.regions = books.data[0].region;
  // vm.userNames = userNames();

  // console.log(books.data.propertyOf);
    var users = books.data.map(function(a) {
      return a.users;
    });
// console.log(users);
    var userNames = function (){
      var arr =[];
      // for(var prop in users){
          // console.log(users[prop][i].name);
          var j=0;
      for(let i=0; i < users.length; i++){
        // if(user[i].length > 0){
          arr.push(users[i][j].name);
        // }
        // console.log(users[i].length)
      }
    // }
      return (arr).join("");
    }
    userNames();
 //  vm.genres.forEach(function(genre, index) {
 //    let c = index + 1;
 //    console.log(index + ". " + genre[c]);
 //  });
 // // vm.userName  = function() {
 //     $(document).ready(function(){
 //        users.forEach(function(user){
 //          vm.users.push(user);
 //        });
 //      });
 //  }

//   vm.userName = function() {
//     BookService
//       //  before submit form
//       .httpCreateBook(vm.book)
//         // after submit form
//         .then(function (data) {
//             alert(data.status);
//             return vm.book = data;
//         },function(error){
//           console.log(error.messages);
//         })
//   }
// }


  // console.log(book.data[0].description);
  // getBooks: getBooks
  // // createBook: createBook;
  //
  // function getBooks() {
  // //  return BookFactory.getBooks()
  // //       .then(setBooks)
  // }
  //
  // function setBooks(data){
  //   console.log(data)
  //   return vm.books = data
  // }
  // --------------------- DISPLAY BOOK -----------------------
  // vm.title = ''; // vm is bound to an input via `ng-model`
  // vm.description ='';
  // vm.issue ='';
  // vm.volume ='';
  // vm.page_count ='';
  // vm.issue_date ='';
  // vm.graphic_novel ='';
  //
  // vm.createBook = createBook;
  //
  // function createBook(title, description, issue, volume, page_count, issue_date, graphic_novel) {
  //     // BookService
  //     //   .httpCreateBook(vm.title, vm.description, vm.issue, vm.volume, vm.page_count, vm.issue_date, vm.graphic_novel)
  //     //     .then(function (data) {
  //     //         alert(data.status);
  //     //         return vm.books = data;
  //     //     }),function(error){
  //     //        //handle what happens if there is an error with the http post call
  //     //        console.log("Error occurred: " + error);
  //     //     }
  //     var req= {
  //       method: 'POST',
  //       url:'/comics',
  //       headers: {
  //           'Content-Type': undefined
  //       },
  //       data:{ content }
  //     }
  //     return $http
  // }
}

angular
        .module('app')
        .controller('BooksController', BooksController);
