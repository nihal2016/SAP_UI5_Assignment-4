sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.yash.assignment-4.controller.View2", {
		onInit: function () {
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched, this);
		},
		onShipmentContinueButtonPress: function () {
			var shipmentID = this.getView().byId("shipmentIdInput").getValue();
			if (shipmentID !== "12345678") {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteView3");
			}
		},
		onNoShipmentIDButtonPress: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView4");
		},
		onRequestHelpButtonPress: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView5");
		},
		onBackToHomeButtonPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView1");
		}
	});
});