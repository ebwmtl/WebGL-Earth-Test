'use strict';

(function($) {

	function initEarth() {
		var earth = new WE.map('earth', {
			zooming: true
		});

		earth.setView([46.8011, 8.2266], 2);

		WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
			attribution: 'WebGL-Earth-Test',
			tms: true
		}).addTo(earth);
	}

	$(document).ready(function() {
		initEarth();
	});

}(jQuery));
