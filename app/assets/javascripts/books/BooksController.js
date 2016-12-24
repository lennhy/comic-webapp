function BooksController(books) {
  var vm = this;
  vm.books = books.data;
  vm.userNames;
  vm.region;
  vm.genres;

  function genres(genres){
    genres.forEach(function(val, i){

    })
   }

   function userNames(){
      var usernames =[];
      var region='';
      var genres=[];
      var j=0;
      for(let i=0; i < users.length; i++){
        if(users[i][j].role === "publisher") {
          usernames.push(users[i][j].name);
        }
      }
      vm.userNames = (usernames).join(",");
    }
    userNames();
}

angular
        .module('app')
        .controller('BooksController', BooksController);
