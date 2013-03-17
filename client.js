( function() {
    Deps.afterFlush( function() {
        angular.module('meteorapp', []).config(['$interpolateProvider', function ($interpolateProvider) {
            $interpolateProvider.startSymbol('{%');
            $interpolateProvider.endSymbol('%}');
        }]);

        angular.bootstrap(document, ['meteorapp']);
    });
}) ();
