var app = angular.module('hi',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'mainController'
		})
		.when('/resume', {
			templateUrl: 'partials/resume.html',
			controller: 'mainController'
		})
		.when('/projects', {
			templateUrl: 'partials/projects.html',
			controller: 'mainController'
		})
		.when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'mainController'
		})
		.otherwise({
			redirectTo: '/about' //redirect
		});
})
