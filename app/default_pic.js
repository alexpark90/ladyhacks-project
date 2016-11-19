angular
    .module('lokee')
    .directive('img', defaultPicture);

function defaultPicture() {
    var directive = {
		restrict: 'E',
		link: function(scope, element, attrs) {
			element.bind('error', function() {
				element.prop('src', './image/logolokee.png');
			});
		}
	};
	
	return directive;
}