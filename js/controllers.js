
var jobernizeControllers = angular.module('jobernizeControllers', []);

jobernizeControllers.controller('shortlistController', ['$scope' , '$firebase', function($scope, $firebase) {

	var ref = new Firebase("https://podfuse.firebaseio.com/");

	$scope.jobs = $firebase(ref)

	// $scope.jobs = [

	// {role: 'Awesomeness Operator', salary: 55000, company: 'Tek Co', url: 'http://www.tekco.com/2o3343ok'},
	// {role: 'Silliness Scooper', salary: 32000, company: 'Tek Co', url: 'http://www.tekco.com/2o3343ok'}, 
	// {role: 'Maniac Therapist', salary: 92000, company: 'BarkingRad Media', url: 'http://www.tekco.com/2o3343ok'}


	// ];

	$scope.addJob = function () {

		$scope.jobs.$add(
			{
				role: $scope.newJobRole,
				salary: $scope.newJobSalary,
				company: $scope.newJobCompany,
				url: $scope.newJobUrl 
			}
		);

		console.log($scope);
	}

}]);

jobernizeControllers.controller('resumesController', ['$scope', function($scope) {

}]);