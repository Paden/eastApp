'use strict';

angular.module('eastApp').controller('MainCtrl', ['$scope', 'Artflask', function( scope, Artflask )
{
	var artistsResource =  Artflask.getArtistsResource();
}]);


