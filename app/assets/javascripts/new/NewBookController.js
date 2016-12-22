function NewBookController(BookService, regions) {
  console.log(regions)
  var vm = this;
  vm.regions =[]
  vm.book = {
    title: '',
    description: '',
    issue:'',
    volume:'',
    page_count:'',
    issue_date:'',
    graphic_novel:'',
    regions: regions.data
  };

  vm.createBook = function() {
    console.log(vm.book)

      BookService
        //  before submit form
        .httpCreateBook(vm.book)
          // after submit form
          .then(function (data) {
              alert(data.status);
              return vm.book = data;
          },function(error){
            console.log(error);
          })
  }
  // vm.getRegions = function() {
  //     RegionService
  //          //  before submit form
  //          .httpGetRegions(vm.regions)
  //            // after submit form
  //            .then(function (data) {
  //                alert(data.status);
  //                return vm.regions = data;
  //            },function(error){
  //              console.log(error);
  //            })
  // }

}

angular
        .module('app')
        .controller('NewBookController', NewBookController);
