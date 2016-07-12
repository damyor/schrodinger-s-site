var schrodinger = angular.module('schrodinger', ['ui.bootstrap']);

schrodinger.controller('mainController', ['$scope', function($scope) {
	$scope.currentView = 'top.home';

	$scope.changeView = function (view) {
		$scope.currentView = view;
	}
}]);