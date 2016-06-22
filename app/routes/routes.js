var controllers = require('../controllers');
var express = require('express');

module.exports = function(app){
	// INDEX
	app.get('/', controllers.controllerHome.getHome);
};