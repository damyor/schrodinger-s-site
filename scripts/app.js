var schrodinger = angular.module('schrodinger', []);

schrodinger.controller('mainController', ['$scope', function($scope) {
    $scope.moveDown = function () {
        $scope.moved = true;
    };
}]);
