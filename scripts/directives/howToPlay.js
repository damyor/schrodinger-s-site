var app = angular.module('schrodinger');

app.directive('howToPlay', function() {
	return {
		restrict: 'E',
		scope: true,
		replace: true,
		templateUrl: 'views/howToPlay.html',
		controller: ['$scope', function ($scope) {
		}]
	}
})