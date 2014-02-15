'use strict';

angular.module('eastApp').service('Artflask', ['$resource', function Artflask ( $resource )
{
	var endPoint     = 'http://east.gluu.org',
		artResource  =  $resource(endPoint + '/art/:art_id/:action', {art_id:'@id', action: 'picture' } );

	return {
		getArtResource : function()
		{
			return artResource;
		}
	}
}]);
