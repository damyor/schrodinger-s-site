angular.module('schrodinger').service('Translator', function(Languages) {
    var currentLanguage;
    
    this.changeLanguage = function(language) {
        currentLanguage = language;
    };
    
    this.translate = function(key) {
        return Languages[currentLanguage][key];
    };
});