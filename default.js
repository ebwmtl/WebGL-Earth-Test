'use strict';

(function($) {

	var layerDefault = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
			attribution: 'WebGL-Earth-Test',
			tms: true
		}),
		layerStreet = WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
			attribution: '© OpenStreetMap contributors'
		});

	function initEarth() {
		var earth = new WE.map('earth', {
				zooming: true
			}),
			coordinates = {
				moscow: [55.751244, 37.618423]
			},
			marker = WE.marker(coordinates.moscow).addTo(earth);

		earth.setView(coordinates.moscow, 2);

		marker.bindPopup('Moscow', 60, true).openPopup();

		layerDefault.addTo(earth);

		layerStreet.addTo(earth).setOpacity(0);
	}

	function toggleLayers() {
		$(document).on('change', '[name="layer"]', function() {
			var val = $(this).val();

			layerDefault.setOpacity(val === 'default' ? 1 : 0);
			layerStreet.setOpacity(val === 'map' ? 1 : 0);
		});
	}

	$(document).ready(function() {
		initEarth();
		toggleLayers();
	});

}(jQuery));
