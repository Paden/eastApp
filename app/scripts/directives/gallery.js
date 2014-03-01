'use strict';

angular.module('eastApp').directive('gallery', function ( $timeout, Artflask )
{
    return {
		templateUrl : 'views/directives/gallery.html',
		restrict    : 'E',
		link        : function postLink(scope, element, attrs)
		{
			var VenuesResource =  Artflask.getVenuesResource();

			VenuesResource.query( function( res )
			{
				$timeout(function() { scope.venues = res; });
			});

			scope.isSelectedVenue =  function ( venue )
			{
				if ( !scope.selectedVenue ) { return true; }

				return scope.selectedVenue._id.$oid !== venue._id.$oid;
			}

			scope.venueClicked    =  function ( venue )
			{
				scope.selectedVenue =  venue;
			};
		}
    };
 });
