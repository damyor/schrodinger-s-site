var app = angular.module('schrodinger');

app.directive('aboutUs', function() {
	return {
		restrict: 'E',
		scope: true,
		replace: true,
		templateUrl: 'views/aboutUs.html',
		controller: ['$scope', function ($scope) {
		}]
	}
});