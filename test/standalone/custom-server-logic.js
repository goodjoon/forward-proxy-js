/**
 * New node file
 */

var http = require('http')
	,httpProxy = require('http-proxy');

httpProxy.createServer(function(req, res, proxy) {
	proxy.proxyRequest(req, res, {
		host:'localhost'
		, port: 9000
	});
}).listen(8000);

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);