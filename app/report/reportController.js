(function(){
	'use strict';

	var controllerId = 'ReportController';

	angular
		.module('lokee')
		.controller(controllerId, ReportController);

		ReportController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast',
			'$location',
			'serviceFactory'
		];

		function ReportController($scope, $mdDialog, $mdToast, $location, serviceFactory){

			$scope.departments = [

				{value : 'dep1'},
				{value : 'dep2'},
				{value : 'dep3'},
				{value : 'dep4'}

			];


			/// functions

			$scope.submitProblem = function () {
				//$location.path("/detail/" + id);

				console.log("it clicked");
			};
		}
})();