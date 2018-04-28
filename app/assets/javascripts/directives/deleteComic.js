// function deleteComic() {
//     function go(scope, element, attrs, ngModel) {
//       console.log("sdjnsdjs" + $scope)
//       for(var i =0; i < scope.book.length; i++){
//           if (users[i].role === "publisher" && users[i].id === currentUser.id){
//             return deleteComic.template;
//           }
//        }
//     }
//   	return {
//
//   		restrict: 'EA',
//   		require: 'ngModel',
//       template: `<div ng-if="currentUser.role === 'publisher' && currentUser.id === user.id ">
//
//       <form name="deleteBookForm" ng-submit="vm.deleteBook()">
//         <button type"submit" value="delete book">Delete Book</button>
//       </form>
//       </div>`,
//   		link: go
//     }
//   }
//
// angular
// 	.module('app')
// 	.directive('deleteComic', deleteComic);
