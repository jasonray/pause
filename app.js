var express = require('express');
var app = express();
var httpPort = 8888;

var morganLogger = require('morgan')('dev');

// log the request to stdout
app.use(morganLogger);

// this would represent an expensive resource with 2000ms latency
app.get('/', function(req, res, next) {
	// logger.info('begin resource processing, fetch data which will take 1s');
	setTimeout(function() {
		// logger.info('end fetch data');
		res.end('retrieved data \n');
	}, 2000);
});

app.listen(httpPort, function() {
	console.log("now listening on %s", httpPort);
});
