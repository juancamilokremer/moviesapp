define([ 'angular',
	  'config/config',
         'ngRoute', 'ngResource', 'LocalStorageModule',
         //'tmdb/services/TMDBService',
         'tmdb/partials/home/HomeController'/*,
         'tmdb/partials/remoteImageLoader/RemoteImageLoader',
         'tmdb/directives/popularMovies'*/],
    function( angular, config, $resource, $location, LocalStorageModule, HomeController) { //, TMDBService, , RemoteImageLoader, popularMoviesDirective) {
    	"use strict";

        /** @constructs app */
        var angularModules = config.standardAngularModules.concat( 'LocalStorageModule' );

        /** @constructs app */
        var app = angular.module("app", angularModules );

    //  Configure $locationProvider and $routeProvider to allow top-level navigation within this route
	app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(false);
	}]);

       //app.service('TMDBService', TMDBService);
    
       app.controller( "HomeController", HomeController );
       /*app.controller( "RemoteImageLoader", RemoteImageLoader );

       app.directive( "popularMovies", popularMoviesDirective );*/

	app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when( '/', { templateUrl: '/tmdb/partials/home/Home.html', controller: 'HomeController' } );
           /* $routeProvider.when( '/movie/:id', { templateUrl: '/tmdb/partials/movie/movie.html', controller: 'MovieController' } );
            $routeProvider.when( '/person/:id', { templateUrl: '/tmdb/partials/person/person.html', controller: 'PersonController' } );*/
            $routeProvider.otherwise( {
                template: function() {
                    throw 'An internal error occurred because the given path does not resolve to a known route.';
                }
            });
        }]);

    	return app;
    }
);
