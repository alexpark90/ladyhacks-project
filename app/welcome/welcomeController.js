(function(){
	'use strict';

	var controllerId = 'WelcomeController';

	angular
		.module('ladyhacks')
		.controller(controllerId, WelcomeController);

		WelcomeController.$inject = [
			'$scope', 
			'$location'
		];

		function WelcomeController($scope,$location){
		    
		    document.getElementById("username").style.opacity = "0";
		    document.getElementById("password").style.opacity = "0";
		    document.getElementById("loginbtn").style.opacity = "0";
		    document.getElementById("loginbutton").onclick = function(e) {
		        document.getElementById("loginbutton").style.opacity = "0";
		    document.getElementById("password").style.opacity = "0";
                document.getElementById("loginbtn").style.opacity = "1";
                document.getElementById("username").style.opacity = "1";
		    document.getElementById("password").style.opacity = "1";
		    };
		    
		    /*
		    
		    document.getElementById("loginbtn").onclick = function(e) {
    				$location.path("/main");
		    };*/
		    
		    $scope.goToMain = function(){
		    	$location.path("/main");
	    	};
		}
})();