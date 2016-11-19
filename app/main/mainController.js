(function(){
	'use strict';

	var controllerId = 'MainController';

	angular
		.module('lokee')
		.controller(controllerId, MainController);

		MainController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast',
			'$location',
			'serviceFactory',
			'$rootScope'
		];

		function MainController($scope, $mdDialog, $mdToast, $location, serviceFactory, $rootScope){

			serviceFactory.getProblems().query(function(data) {
				
				$scope.problems = data;
				console.log("debug: " + $scope.problems[0].FID);			
			});

			//$scope.order = 'FID';

			$scope.orders = [
				
				{label : 'Date', value : 'SUBMIT_DAT'},
				{label : 'Status', value : 'CASE_STATUS'},
				{label : 'Department', value : 'DEPARTMENT'}

			];

			$scope.reverse = false;

			$scope.departments = [

				{value : 'Forestry'},
				{value : 'Sanitary'},
				{value : 'Parks'},
				{value : 'Parking'},
				{value : 'Works'},
				{value : 'Traffic'},
				{value : 'Engineering'}

			];

			/// functions

			$scope.locateToDetail = function (id) {
				$location.path("/detail/" + id);
			};


			$scope.submitProblem = function (problem) {

				var problemToAdd = {
					"FID": 1000,
				    "CASE_ID": 123123,
				    "POSTALCODE": problem.POSTALCODE,
				    "WARD": problem.WARD,
				    "SUBMIT_DAT": "2016-05-15",
				    "DETAILS": problem.DETAILS,
				    "LOCATION": problem.LOCATION,
				    "CASE_STATUS": "Assigned",
				    "X_COORDINATE": 0,
				    "Y_COORDINATE": 0,
				    "DEPARTMENT": "",
				    "L_HOUSE_NO": 2350,
				    "L_STREET_N": "",
				    "FACILITY_N": 0,
				    "INTER_ST_1": 0,
				    "INTER_ST_2": 0,
				    "SUBMIT_DATE": 0,
				    "SOLVE_DATE": 0,
				    "STATUS": 0,
				    "PHOTO": 0,
				    "TYPE": 0,
				    "DESC": 0
				}

				$scope.problems.push(problemToAdd);
				$rootScope.problem = problemToAdd;
				$mdToast.show(
					$mdToast.simple()
						.content('The problem has been added successfully!')
						.hideDelay(3000)
				);

			};

			/*

			$scope.pastEvents = function (events) {

				var past = [];

				for (var i=0; i<events.length; i++) {
					if (events[i].thisDate<moment() && (events[i].status!=='Available')) {
						past.push(events[i]);
					}
				}

				return past;
			};


			*/
		}
})();