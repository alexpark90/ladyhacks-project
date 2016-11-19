(function(){
	'use strict';

	var controllerId = 'DetailController';
 
	angular
		.module('lokee')
        .controller(controllerId, DetailController);
        
        DetailController.$inject = [
            '$scope',
            '$stateParams',
            'serviceFactory',
            '$rootScope'
        ];
        
        function DetailController($scope, $stateParams, serviceFactory, $rootScope){
            
            if($stateParams.id==1000) {
                $scope.problem = $rootScope.problem;
            }
            else {
                serviceFactory.getProblems().query(function(data) {
                    for(var i =0; i<data.length; i++) {
                        if(data[i].FID==$stateParams.id) {
                            $scope.problem = data[i];
                        }
                    }                
                });    
            }
        }
})();