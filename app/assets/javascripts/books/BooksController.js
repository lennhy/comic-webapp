function BooksController(books) {
  var vm = this;
  vm.books = books.data;

//   function returnPublisher(user){
//       // for(let i=0; i < users.length; i++){
//         if (user ==="publisher"){
//           return user.name;
//         }
//       // }
//   }
//   vm.filteredList = $filter('filter')(vm.users, returnPublisher(vm.user));
//
// //    function userNames(){
// //       var usernames =[];
// //       var region='';
// //       var genres=[];
// //       var j=0;
// //       for(let i=0; i < users.length; i++){
// //         if(users[i][j].role === "publisher") {
// //           usernames.push(users[i][j].name);
// //         }
// //       }
// //       vm.userNames = (usernames).join(",");
//     }
//     userNames();
}

angular
        .module('app')
        .controller('BooksController', BooksController);
