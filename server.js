

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var server = http.createServer(app);

// var config = require('./config_server');
// var port = config.port;

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
// HTML
if (isDeveloping) {
	const webpack = require('webpack');
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const config = require('./webpack.config.js');

	const compiler = webpack(config);
	const middleware = webpackMiddleware(compiler, {
	    publicPath: config.output.publicPath,
	    noInfo: true,
	    quiet: false,
	    lazy: false,
	    watchOptions: {
	      aggregateTimeout: 300,
	      poll: true
	    },
	    stats: {
	      colors: true,
	    }
	});
	const bundlePath = path.join(__dirname, './app/templates/index.html');

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('*', function response(req, res) {
	    res.write(middleware.fileSystem.readFileSync(bundlePath));
	    res.end();
	});
}else{
	const staticPath = path.join(__dirname, 'app/templates');
	app.use(express.static(staticPath));
}

// ROUTE
var routes = require('./app/routes/routes')(app);

app.listen(port, '0.0.0.0', function onStart(err) {
  	if (err) {
    	console.log(err);
  	}
  	console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});


