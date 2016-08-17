define(['angular', 'config/config'],
	function(angular, config){
		"use strict";

		var HomeController = function($scope){
			$scope.view   = {
                movies: [],
            };

            /*var api = TMDBService.Discover();
            api.discover.movies().then(function ( response ) {
                $scope.view.movies = response.data;
            });*/
		};

		HomeController.$inject = ['$scope'];

		return HomeController;
	}
);
