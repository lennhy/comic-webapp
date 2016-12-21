function HomeController(books) {
  var vm = this;
  vm.books = books.data;
  vm.genres = genres;

  function genres() {
    vm.books.forEach(function(obj, i){
        return obj.genres;
    })
  }

}
angular
        .module('app')
        .controller('HomeController', HomeController);


        function myFunction(item, index, arr) {
            arr[index] = item * document.getElementById("multiplyWith").value;
            demo.innerHTML = numbers;
        }
