'use strict';

angular.module('eastApp').service('Artflask', ['$resource', function Artflask ( $resource )
{
	var endPoint         = 'http://east.gluu.org/api/v1',
		artResource      =  $resource(endPoint + '/art/:art_id/:action', { art_id:'@id' } ),
		artistsResource  =  $resource(endPoint + '/artists/:artist_id'),
		eventsResource   =  $resource(endPoint + '/events/:event_name'),
		venuesResource   =  $resource(endPoint + '/venues/:venue_id'),
		registerResource =  $resource(endPoint + '/register/:registration_id', {registration_id : '@id' }),
		profileResource  =  $resource(endPoint + '/profile'),
		staffResource    =  $resource(endPoint + '/staff/:staff_id', { staff_id : '@id' });

	return {
		getEndPoint         : function() { return endPoint;       },
		getArtResource      : function() { return artResource;    },
		getArtistsResource  : function() { return artistsResource;},
		getEventsResource   : function() { return eventsResource; },
		getVenuesResource   : function() { return venuesResource; },
		getRegisterResource : function() {return registerResource;},
		getProfileResource  : function() {return profileResource; },
		getStaffResource    : function() {return staffResource;   },
	};
}]);
