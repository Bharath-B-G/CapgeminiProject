sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
    ],
    (Controller,JSONModel) => {
      "use strict";
  
      return Controller.extend("miniproject.controller.App", {
        onInit: function() {
          var oModel = new JSONModel();

          // Load the data from tools.json
          oModel.loadData("/model/CoreData/data.json"); // Update the path accordingly
  
          // Set the model to the view
          this.getView().setModel(oModel);
                  
        }
      });
    }
  );
  