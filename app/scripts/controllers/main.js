'use strict';

angular.module('eastApp').controller('MainCtrl', ['$scope', 'Artflask', '$timeout', function( $scope, Artflask, $timeout )
{
	var VenuesResource =  Artflask.getVenuesResource();
	$scope.venues      =  true;
	$scope.mediums     =  [];

	function mediumContains( name )
	{
		for (var i = $scope.mediums.length - 1; i >= 0; i--)
		{
			if( $scope.mediums[i].name === name ) { return true; }
		}
		return false;
    }

	VenuesResource.query( function( venues )
	{
		venues.forEach(function( venue )
		{
			venue.mediums.forEach( function( medium )
			{
				if ( !mediumContains( medium ) )
				{
					var name =  medium.charAt(0).toUpperCase() + medium.substr(1); //uppercase first letter

					$scope.mediums.push(
					{
						name : medium,
						html : '<img class="mediumIcon" src="images/'+medium+'.svg">' + name
					});
				}
			});
		});

		$timeout(function()
		{
			$scope.venues  =  venues;

			$('.selectpicker').selectpicker().on('change', function()
			{
				var selected = $(this).val();

				$timeout(function() { $scope.searchOption = selected });
			});
		});
	});
}]);


