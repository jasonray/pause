console.log('starting pause');

var pargv = require('minimist')(process.argv.splice(2));

var httpPort = pargv.p || 80;
var defaultDelay = pargv.d || 1000;
var defaultContent = pargv.c || '';
var defaultResponseHttpStatus = pargv.s || 202;
 
var express = require('express');
var app = express();

// log the request to stdout
var morganLogger = require('morgan')('dev');
app.use(morganLogger);

console.log('default delay set to ' + defaultDelay);
console.log('default content to ' + defaultContent);

// this would represent an expensive resource with latency
app.get('/', function(req, res, next) {
	var delay = req.query.delay || defaultDelay;
	var responseContent = req.query.content || defaultContent;
	var responseHttpStatus = req.query.status || defaultResponseHttpStatus;

	setTimeout(function() {
		// logger.info('end fetch data');
		res.status(responseHttpStatus).end(responseContent);
	}, delay);
});

app.listen(httpPort, function() {
	console.log("now listening on %s", httpPort);
});