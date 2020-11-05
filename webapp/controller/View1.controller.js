sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.yash.assignment-4.controller.View1", {
		onInit: function () {
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched, this);
		},
		onPickingButtonPress: function (oEvent) {
			this._oRouter.navTo("RouteView2");
		}
	});
});