function fileModel($parse) {
	return {
	restrict: 'EA', //the directive can be used as an attribute only
		/*
	 link is a function that defines functionality of directive
	 scope: scope associated with the element
	 element: element on which this directive used
	 attrs: key value pair of element attributes
		*/
		link: function (scope, element, attrs) {
				var model = $parse(attrs.fileModel),
				    modelSetter = model.assign; //define a setter for fileModel

				//Bind change event on the element
				element.bind('change', function () {
					console.log(scope.vm.book.cover)

						//Call apply on scope, it checks for value changes and reflect them on UI
						scope.$apply(function () {

								//set the model value
								modelSetter(scope, element[0].files[0]);
						});
				});
		}
	}
}
angular
	.module('app')
	.directive('fileModel', fileModel);
