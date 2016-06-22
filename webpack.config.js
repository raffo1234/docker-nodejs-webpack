'use strict';

var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app/templates';

module.exports = {
    context: APP,
    entry: {
        app: [
        	'webpack/hot/dev-server',
        	'./core/bootstrap.js',
        	'./index.html'
        	]
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
	    loaders: [
		    {
		        test: /\.scss$/,
		        loader: 'style!css!sass'
		    },
		    {
		    	test: /\.js$/,
		    	loader: 'ng-annotate!babel?presets[]=es2015!jshint',
		    	exclude: /node_modules|bower_components/
			}
	    ]
  	}
}