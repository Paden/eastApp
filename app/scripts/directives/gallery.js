'use strict';

angular.module('eastApp').directive('gallery', function ( $timeout, Artflask )
{
    return {
		templateUrl : 'views/directives/gallery.html',
		restrict    : 'E',
		scope       : false,
		link        : function postLink( scope )
		{
			if ( !scope.venues )
			{
				var VenuesResource =  Artflask.getVenuesResource();

				VenuesResource.query( function( res )
				{
					$timeout(function() { scope.venues = res; });
				});
			}

			scope.filterSearchOptions =  function ( venue )
			{
				if( scope.searchVenue )
				{
					var searchVenueLower =  scope.searchVenue.toLowerCase();

					if ( venue.name.toLowerCase().indexOf( searchVenueLower ) >= 0 )
					{
						return true;
					}

					if ( (venue.site_id + '').indexOf( searchVenueLower ) >= 0 )
					{
						return true;
					}

					for ( var i = 0; i < venue.mediums.length; i++ )
					{
						if( venue.mediums[i].toLowerCase().indexOf( searchVenueLower ) >= 0 ) { return true; }
					}

					return false;
				}

				return true;
			};

			scope.venueClicked    =  function ( venue )
			{
				scope.selectedVenue =  venue;
			};
		}
    };
 });
