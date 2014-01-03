'use strict';

var jobernizeApp = angular.module('jobernizeApp',[
	'ngRoute',

	'jobernizeControllers',
    'jobernizeFilters',
    'jobernizeServices'
]);

jobernizeApp.config(['$routeProvider', function($routeProvider) {
		
		$routeProvider.when('/shortlist', {
			templateUrl: 'partials/shortlist.html',
			controller: 'shortlistController'
		}).when('/resumes', {
			templateUrl: 'partials/resumes.html',
			controller: 'resumesController'
		});

}]);
