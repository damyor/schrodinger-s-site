var app = angular.module('schrodinger');

app.directive('home', function () {
	return {
		restrict: 'E',
		scope: true,
		replace: true,
		templateUrl: 'views/home.html',
		controller: ['$scope', function ($scope) {
		}]
	};
});