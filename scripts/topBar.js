var app = angular.module('schrodinger');

app.directive('topBar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'views/topBar.html',
        controller: ['$scope', function ($scope) {
            $scope.topBarButtons = [
                {
                    text: 'Home'
                },
                {
                    text: 'How To Play'
                },
                {
                    text: 'About Us'
                },
                {
                    text: 'Buy'
                }
            ];

            $scope.onTopBarButtonClicked = function (topBarButton) {
                $scope.changeView(topBarButton.text);
            }
        }]
    }
});