'use strict';

angular.module('eastApp').directive('gallery', function ()
{
    return {
		templateUrl : 'views/directives/gallery.html',
		restrict    : 'E',
		link        : function postLink(scope, element, attrs)
		{
			scope.isSelectedVenue =  function ( venue )
			{
				if ( !scope.selectedVenue ) { return true; }

				return scope.selectedVenue.id !== venue.id;
			}

			scope.venueClicked    =  function ( venue )
			{
				scope.selectedVenue =  venue;
			};

			scope.venues        =  [{
				'id': 'd471b627-f7f3-4872-96e2-2af4d813673f',
				'site_id': '101c',
				'name': 'Gallery Happy',
				'event_id': 'a93335d9-ca6e-4824-8e30-fdd4551d2c7b',
				'picture': 'images/img-1.jpg',
				'address': '100 Cesar Chavez\nAustin, TX 78702',
				'coordinates': ['40.446195', '-79.982195'],
				'twitter': '@GalleryHappy',
				'mail':'info@galleryhappy.org',
				'phone':'+1 512-555-1212',
				'category':'Artists & Studios',
				'medium':'Ceramics',
				'description':'Fun stuff made of clay by talented people.',
				'artists': ['b18af90a-4054-4c13-a382-8987bbaeb58b'],
				'websites': ['http://www.galleryhappy.com'],
				'managers': ['c3491f70-8c92-11e3-a91c-3c970e1b8563'],
				'ad_1': true,
				'ad_2': true,
				'ad_3': true,
				'ad_4': true,
				'ad_5': true,
				'ad_6': true,
				'ad_7': true,
				'ad_8': false},
				{
				'id': 'd471b627-f7f3-4872-96e2-2af4d8136732',
				'site_id': '101c',
				'name': 'Gallery Happy',
				'event_id': 'a93335d9-ca6e-4824-8e30-fdd4551d2c7b',
				'picture': 'images/img-2.jpg',
				'address': '100 Cesar Chavez\nAustin, TX 78702',
				'coordinates': ['40.446195', '-79.982195'],
				'twitter': '@GalleryHappy',
				'mail':'info@galleryhappy.org',
				'phone':'+1 512-555-1212',
				'category':'Artists & Studios',
				'medium':'Ceramics',
				'description':'Fun stuff made of clay by talented people.',
				'artists': ['b18af90a-4054-4c13-a382-8987bbaeb58b'],
				'websites': ['http://www.galleryhappy.com'],
				'managers': ['c3491f70-8c92-11e3-a91c-3c970e1b8562'],
				'ad_1': true,
				'ad_2': true,
				'ad_3': true,
				'ad_4': true,
				'ad_5': true,
				'ad_6': true,
				'ad_7': true,
				'ad_8': false
			}];
		}
    };
 });
