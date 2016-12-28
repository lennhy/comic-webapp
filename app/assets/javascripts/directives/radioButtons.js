function radioButton() {
	// return {
	// 	restrict: 'A',
	// 	require: 'ngModel',
	// 	link: function (scope, element, attrs, ngModel) {
	// 		ngModel.$validators.radiob = function (values) {
  //       for(var i =0; i < values.length; i++){
  //           return if(values[i] !== true){
  //           }
  //         }
  // 			};
  //
  // 		}
  // 	}
  }

angular
	.module('app')
	.directive('radioButton', radioButton);
