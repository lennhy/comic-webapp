function HomeController(books) {
  var vm = this;
  vm.books = books.data;
  vm.genres = books.data[0].genres;
  vm.regions = books.data[0].region;

  // console.log(books.data[0].region);



    // books.data.forEach(function(obj, i){
    //     console.log(obj[i].genres);
    // })
  // }
}
angular
        .module('app')
        .controller('HomeController', HomeController);
