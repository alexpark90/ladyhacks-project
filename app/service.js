(function(){

	'use strict';

	var serviceId = 'serviceFactory';

	angular
		.module('lokee')
		.factory(serviceId, serviceFactory);

	serviceFactory.$inject = ['$resource'];

	function serviceFactory($resource){

		var fac = {

			getProblems : getProblems
		};

		return fac;


		////// functions 

		function getProblems() {
			
			return $resource("json/oakville.json/:id", {});
		}
	}

})();