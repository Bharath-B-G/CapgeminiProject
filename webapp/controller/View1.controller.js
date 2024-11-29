sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller) {
    "use strict";

    return Controller.extend("miniproject.controller.View1", {
        onInit: function () {

            
        },

        onRowPress: function(){
            var oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteView2", {
                id:"AB"
            })
        }
        
    });


});
