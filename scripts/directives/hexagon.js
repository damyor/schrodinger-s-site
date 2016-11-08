'use strict';

angular.module('schrodinger').directive('hexagon', function () {
    return {
        templateUrl: 'views/hexagon.html',
        scope: {
            width: '=',
            rotation: '='
        },
        link: function ($scope, $element) {
            var top = angular.element($element[0].querySelector('.top')),
                middle = angular.element($element[0].querySelector('.middle')),
                bottom = angular.element($element[0].querySelector('.bottom'));

            $scope.$watch('width', function () {
                top.css('border-bottom-width', Math.round($scope.width / 2 / Math.sqrt(3)));
                top.css('border-left-width', Math.round($scope.width / 2));
                top.css('border-right-width', Math.round($scope.width / 2));

                middle.css('width', $scope.width);
                middle.css('height', Math.round($scope.width / Math.sqrt(3)));

                bottom.css('border-top-width', Math.round($scope.width / 2 / Math.sqrt(3)));
                bottom.css('border-right-width', Math.round($scope.width / 2));
                bottom.css('border-left-width', Math.round($scope.width / 2));
            });

            $scope.$watch('rotation', function () {
                $element.css('transform', 'rotate(' + $scope.rotation + 'deg)');
            });
        }
    };
});