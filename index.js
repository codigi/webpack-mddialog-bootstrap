var angularMaterial = require("webpack-angular-material");
var angularModule = angular.module("$mdDialogBootstrap",["ngMaterial"]);
var div = document.createElement("div");
document.body.appendChild(div);
var $injector = angular.bootstrap(div, ["$mdDialogBootstrap"]);
var $mdDialog = $injector.get("$mdDialog");

module.exports = $mdDialog;
