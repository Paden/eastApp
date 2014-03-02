'use strict';

angular.module('eastApp').directive('gallery', function ( $timeout, Artflask )
{
    return {
		templateUrl : 'views/directives/gallery.html',
		restrict    : 'E',
		scope       : false,
		link        : function postLink(scope, element, attrs)
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
					if ( venue.name.toLowerCase().indexOf( scope.searchVenue.toLowerCase() ) >= 0 )
					{
						return true;
					}

					if ( (venue.site_id + '').indexOf( scope.searchVenue ) >= 0 )
					{
						return true;
					}

					return false;
				}

				if( scope.searchOption )
				{
					for (var i = scope.searchOption.length - 1; i >= 0; i--)
					{
						if ( venue.mediums.indexOf(scope.searchOption[i]) <= 0 )
						{
							return false;
						}
					}
				}
				return true;
			}

			scope.venueClicked    =  function ( venue )
			{
				scope.selectedVenue =  venue;
			};
		}
    };
 });
