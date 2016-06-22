var express = require('express');

exports.getHome = function (req, res){
	res.sendFile(__dirname + '/views/index.html');
}