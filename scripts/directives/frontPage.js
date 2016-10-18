'use strict';

angular.module('schrodinger').directive('frontPage', function () {
    console.log('frontPage');
    return {
        templateUrl: 'views/frontPage.html',
        controller: function ($scope) {
            $scope.onClick = function () {
                console.log($scope.moveDown);
                $scope.moveDown();
            };
        }
    };
});
