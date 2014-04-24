var pargv = require('minimist')(process.argv.splice(2));

var httpPort = pargv.p || 8888;
var defaultDelay = pargv.d || 1000;
var defaultEcho = pargv.e || '';
var defaultStatus = pargv.s || 200;

var express = require('express');
var app = express();


// log the request to stdout
var morganLogger = require('morgan')('dev');
app.use(morganLogger);

// this would represent an expensive resource with 2000ms latency
app.get('/', function(req, res, next) {
	var delay = req.query.d || defaultDelay;
	var echo = req.query.echo || defaultEcho;
	var result = req.query.echo || 'de';
	console.log('delay=%s; result=%s', delay, result);
	setTimeout(function() {
		// logger.info('end fetch data');
		res.end(result);
	}, defaultDelay);
});

app.listen(httpPort, function() {
	console.log("now listening on %s", httpPort);
});
