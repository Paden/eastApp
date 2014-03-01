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
