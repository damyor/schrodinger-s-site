var app = angular.module('schrodinger');

app.directive('topBar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'views/topBar.html',
        controller: function ($scope, Languages, Translator) {
            $scope.topBarButtons = [
                {
                    text: 'top.home'
                },
                {
                    text: 'top.how'
                },
                {
                    text: 'top.about'
                },
                {
                    text: 'top.buy'
                }
            ];
            
            $scope.languages = _.keys(Languages);
            $scope.selectedLanguage = $scope.languages[0];
            Translator.changeLanguage($scope.selectedLanguage);

            $scope.onTopBarButtonClicked = function (topBarButton) {
                $scope.changeView(topBarButton.text);
            };
            
            $scope.selectLanguage = function (language) {
                $scope.selectedLanguage = language;
                $scope.languagesShown = false;
                Translator.changeLanguage(language);
            };
        }
    }
});