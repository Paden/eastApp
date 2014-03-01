'use strict';

angular.module('eastApp').controller('MainCtrl', ['$scope', 'Artflask', function( scope, Artflask )
{
	var artistsResource =  Artflask.getArtistsResource();

	scope.select2Options = {
		allowClear: false
	}

	scope.mediums = [
		{ name : 'Painting'      , html: '<img src="images/painting.svg" style="max-width:20px;height:20px">&nbsp;Painting' },
		{ name : 'Wood'          , html: '<img src="images/wood.svg" style="max-width:20px;height:20px">&nbsp;Wood' },
		{ name : 'Jewelry'       , html: '<img src="images/jewelry.svg" style="max-width:20px;height:20px">&nbsp;Jewelry' },
		{ name : 'Photography'   , html: '<img src="images/photography.svg" style="max-width:20px;height:20px">&nbsp;Photography' },
		{ name : 'Stone'         , html: '<img src="images/stone.svg" style="max-width:20px;height:20px">&nbsp;Stone' },
		{ name : 'Digital'       , html: '<img src="images/digital.svg" style="max-width:20px;height:20px">&nbsp;Digital' },
		{ name : 'Sculpture'     , html: '<img src="images/sculpture.svg" style="max-width:20px;height:20px">&nbsp;Sculpture' },
		{ name : 'Metal'         , html: '<img src="images/metal.svg" style="max-width:20px;height:20px">&nbsp;Metal' },
		{ name : 'Ceramics'      , html: '<img src="images/ceramics.svg" style="max-width:20px;height:20px">&nbsp;Ceramics' },
		{ name : 'Printed Matter', html: '<img src="images/printed-matter.svg" style="max-width:20px;height:20px">&nbsp;Printed Matter' },
		{ name : 'Drawing'       , html: '<img src="images/drawing.svg" style="max-width:20px;height:20px">&nbsp;Drawing' },
		{ name : 'Mixed Media'   , html: '<img src="images/mixed-media.svg" style="max-width:20px;height:20px">&nbsp;Mixed Media' },
		{ name : 'Performance'   , html: '<img src="images/performance.svg" style="max-width:20px;height:20px">&nbsp;Performance' },
		{ name : 'Furniture'     , html: '<img src="images/furniture.svg" style="max-width:20px;height:20px">&nbsp;Furniture' },
		{ name : 'Fiber'         , html: '<img src="images/fiber.svg" style="max-width:20px;height:20px">&nbsp;Fiber' },
		{ name : 'Installation'  , html: '<img src="images/installation.svg" style="max-width:20px;height:20px">&nbsp;Installation' },
		{ name : 'Design'        , html: '<img src="images/design.svg" style="max-width:20px;height:20px">&nbsp;Design' },
		{ name : 'Film/Video'    , html: '<img src="images/film-video.svg" style="max-width:20px;height:20px">&nbsp;Film/Video' }
	];
}]);


