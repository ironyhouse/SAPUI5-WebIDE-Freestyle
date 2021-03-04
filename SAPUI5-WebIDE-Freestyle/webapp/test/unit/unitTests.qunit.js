/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPUI5-WebIDE-Freestyle/SAPUI5-WebIDE-Freestyle/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});