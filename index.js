var angularMaterial = require("webpack-angular-material");
var angularModule = angular.module("$mdDialogBootstrap",["ngMaterial"]);
var $injector = angular.bootstrap(document.body, ["$mdDialogBootstrap"]);
var $mdDialog = $injector.get("$mdDialog");

module.exports = $mdDialog;
