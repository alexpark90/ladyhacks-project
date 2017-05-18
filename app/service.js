(function(){

	'use strict';

	var serviceId = 'serviceFactory';

	angular
		.module('ladyhacks')
		.factory(serviceId, serviceFactory);

	serviceFactory.$inject = ['$resource'];

	function serviceFactory($resource){

		var fac = {

			getServices : getServices,
			getUsers : getUsers,
			addService : addService
		};

		return fac;


		////// functions 

		function getServices() {
			
			return $resource("json/services.json/:id", {});
		};

		function getUsers() {
			
			return $resource("json/users.json/:id", {});
		};

		function addService(serviceToAdd) {
			
			return;
		};
	}

})();