'use strict';

angular.module('eastApp').directive('gallery', function ()
{
    return {
		templateUrl : '/views/directives/gallery.html',
		restrict    : 'E',
		link        : function postLink(scope, element, attrs)
		{
			scope.venues =  ['venue1','venue2','venue3','venue4','venue5', 'venue6','venue7','venue8','venue9',
							 'venue12','venue22','venue32','venue42','venue52', 'venue62','venue72','venue82','venue92'];

			scope.mediums = [
				{ name : 'Painting'      , img: '<img src="images/painting.svg" style="max-width:20px;height:20px">Painting' },
				{ name : 'Wood'          , img: '<img src="images/wood.svg" style="max-width:20px;height:20px">Wood' },
				{ name : 'Jewelry'       , img: '<img src="images/jewelry.svg" style="max-width:20px;height:20px">Jewelry' },
				{ name : 'Photography'   , img: '<img src="images/photography.svg" style="max-width:20px;height:20px">Photography' },
				{ name : 'Stone'         , img: '<img src="images/stone.svg" style="max-width:20px;height:20px">Stone' },
				{ name : 'Digital'       , img: '<img src="images/digital.svg" style="max-width:20px;height:20px">Digital' },
				{ name : 'Sculpture'     , img: '<img src="images/sculpture.svg" style="max-width:20px;height:20px">Sculpture' },
				{ name : 'Metal'         , img: '<img src="images/metal.svg" style="max-width:20px;height:20px">Metal' },
				{ name : 'Ceramics'      , img: '<img src="images/ceramics.svg" style="max-width:20px;height:20px">Ceramics' },
				{ name : 'Printed Matter', img: '<img src="images/printed-matter.svg" style="max-width:20px;height:20px">Printed Matter' },
				{ name : 'Drawing'       , img: '<img src="images/drawing.svg" style="max-width:20px;height:20px">Drawing' },
				{ name : 'Mixed Media'   , img: '<img src="images/mixed-media.svg" style="max-width:20px;height:20px">Mixed Media' },
				{ name : 'Performance'   , img: '<img src="images/performance.svg" style="max-width:20px;height:20px">Performance' },
				{ name : 'Furniture'     , img: '<img src="images/furniture.svg" style="max-width:20px;height:20px">Furniture' },
				{ name : 'Fiber'         , img: '<img src="images/fiber.svg" style="max-width:20px;height:20px">Fiber' },
				{ name : 'Installation'  , img: '<img src="images/installation.svg" style="max-width:20px;height:20px">Installation' },
				{ name : 'Design'        , img: '<img src="images/design.svg" style="max-width:20px;height:20px">Design' },
				{ name : 'Film/Video'    , img: '<img src="images/film-video.svg" style="max-width:20px;height:20px">Film/Video' }
			];

		}
    };
 });
