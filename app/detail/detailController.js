(function(){
	'use strict';

	var controllerId = 'DetailController';
 
	angular
		.module('ladyhacks')
        .controller(controllerId, DetailController);
        
        DetailController.$inject = [
            '$scope',
            '$stateParams',
            'serviceFactory',
            '$rootScope'
        ];
        
        function DetailController($scope, $stateParams, serviceFactory, $rootScope){
            
            if($stateParams.id==1000) {
                $scope.service = $rootScope.service;
            }
            else {
                serviceFactory.getServices().query(function(data) {
                    for(var i =0; i<data.length; i++) {
                        if(data[i].ID==$stateParams.id) {
                            $scope.service = data[i];
                        }
                    }                
                });    
            }
        }
})();