(function(){
	'use strict';

	var controllerId = 'ServiceFormController';

	angular
		.module('ladyhacks')
		.controller(controllerId, ServiceFormController);

		ServiceFormController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast',
			'$location',
			'serviceFactory'
		];

		function ServiceFormController($scope, $mdDialog, $mdToast, $location, serviceFactory){

			$scope.departments = [

				{value : 'dep1'},
				{value : 'dep2'},
				{value : 'dep3'},
				{value : 'dep4'}

			];


			/// functions

			$scope.submitService = function () {
				//$location.path("/detail/" + id);

				console.log("it clicked");
			};
		}
})();