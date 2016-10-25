'use strict';

angular.module('schrodinger').directive('frontPage', function () {
    return {
        templateUrl: 'views/frontPage.html',
        controller: function ($scope) {
            $scope.onClick = function () {
                $scope.moveDown();
            };
        }
    };
});
