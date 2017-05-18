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

			var initID = 20;

			$scope.departments = [

				{value : 'Household Tasks'},
				{value : 'Transportation'},
				{value : 'Senior Services'},
				{value : 'Children Services'},
			    {value : 'Media Services'},
			    {value : 'Tutoring'}

			];


			$scope.tasks = [

				{department: 'Household Tasks', value : 'House Cleaning'},
				{department: 'Household Tasks', value : 'Laundry'},
				{department: 'Household Tasks', value : 'Cooking'},
				{department: 'Transportation', value : 'Airport Pickup'},
				{department: 'Transportation', value : 'Moving'},
				{department: 'Senior Services', value : 'Teaching Tech'},
			    {department: 'Children Services', value : 'Playing in the park'},
			    {department: 'Children Services', value : 'Checking homework'},
			    {department: 'Media Services', value : 'Filming'},
			    {department: 'Tutoring', value : 'Math Help'},
			    {department: 'Tutoring', value : 'English Specking'}
			  

			];


			$scope.service = {

				ID: initID++,
				UserID: "9",
				Location: "Toronto",
				Address: "123 Street",
				Task: "",
				Date: new Date().toISOString().slice(0,10),
				Details: "",
				Department: "",
				Duration: "",
				Postalcode: "",
				Type: "seeking"

			};


			/// functions

			$scope.submit = function () {

				var serviceToAdd = $scope.service;

				console.log(serviceToAdd);

				serviceFactory.addService(serviceToAdd);

                    
					$scope.service = {

						ID: initID++,
						UserID: "9",
						Location: "Toronto",
						Address: "123 Street",
						Task: "",
						Date: new Date().toISOString().slice(0,10),
						Details: "",
						Department: "",
						Duration: "",
						Postalcode: "",
						Type: "seeking"

					};
                    
                    $scope.serviceForm.$setPristine();
				
				$mdDialog.hide();
			};

			$scope.cancel = function () {
				$mdDialog.cancel();
			};
		}
})();