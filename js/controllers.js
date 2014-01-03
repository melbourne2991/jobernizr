
var jobernizeControllers = angular.module('jobernizeControllers', []);

jobernizeControllers.controller('shortlistController', ['$scope', function($scope) {

	$scope.jobs = [

	{role: 'Awesomeness Operator', salary: 55000, company: 'Tek Co'},
	{role: 'Silliness Scooper', salary: 32000, company: 'Tek Co'}, 
	{role: 'Maniac Therapist', salary: 92000, company: 'BarkingRad Media'}

	];

	$scope.addJob = function () {

		$scope.jobs.push(
			{
				role: $scope.newJobRole,
				salary: $scope.newJobSalary,
				company: $scope.newJobCompany 
			}
		);

		console.log($scope);
	}

}]);

jobernizeControllers.controller('resumesController', ['$scope', function($scope) {

}]);