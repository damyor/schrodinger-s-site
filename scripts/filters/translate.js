angular.module('schrodinger').filter('Translate', function(Translator) {
    var filter = function(key) {
        return Translator.translate(key);
    };
    
    filter.$stateful = true;
    
    return filter;
});