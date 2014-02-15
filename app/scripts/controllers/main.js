'use strict';

angular.module('eastApp').controller('MainCtrl', ['$scope', 'Artflask', function( scope, Artflask )
{
	var artistsResource =  Artflask.getArtistsResource();

	scope.mediums = ['Painting','Wood','Jewelry','Photography','Stone','Digital','Sculpture','Metal',
					 'Ceramics','Printed Matter','Drawing','Mixed Media','Performance','Furniture',
					 'Fiber','Installation','Design','Film/Video'];
}]);


