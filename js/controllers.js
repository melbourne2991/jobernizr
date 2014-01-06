
var jobernizeControllers = angular.module('jobernizeControllers', ['jobernizeServices', 'angularFileUpload']);

jobernizeControllers.controller('shortlistController', ['$scope', 'Resumes', function($scope, Resumes) {

	// var ref = new Firebase("https://podfuse.firebaseio.com/");

	// $scope.jobs = $firebase(ref)
	$scope.resumes = Resumes;

	$scope.jobs = [

	{role: 'Awesomeness Operator', salary: 55000, company: 'Tek Co', url: 'http://www.tekco.com/2o3343ok'},
	{role: 'Silliness Scooper', salary: 32000, company: 'Tek Co', url: 'http://www.tekco.com/2o3343ok'}, 
	{role: 'Maniac Therapist', salary: 92000, company: 'BarkingRad Media', url: 'http://www.tekco.com/2o3343ok'}


	];

	console.log($scope);

	$scope.addJob = function () {

		//add instead of push for firebase
		$scope.jobs.push(
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

jobernizeControllers.controller('resumesController', ['$scope', '$fileUploader', 'Resumes', function($scope, $fileUploader, Resumes) {

	$scope.resumes = Resumes;

	var uploader = $scope.uploader = $fileUploader.create({
		scope: $scope,
		url: 'uploaded'
	});

	console.log($scope.uploader)


	// $scope.resumes.push(
	// 		{
	// 			name: '2013 Updated Front-End',
	// 			category: 'Front-End', 
	// 			date_added: '20.12.13', 
	// 			link_to_file: '',
	// 			content: 'Howdy'
	// 		}
	// );

}]);