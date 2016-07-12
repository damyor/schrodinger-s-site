var app = angular.module('schrodinger');

app.directive('buy', function() {
	return {
		restrict: 'E',
		scope: true,
		replace: true,
		templateUrl: 'views/buy.html',
		controller: ['$scope', function ($scope) {
		}]
	}
});