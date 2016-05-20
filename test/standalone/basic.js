/**
 * New node file
 */
var http = require('http')
	,httpProxy = require('http-proxy');

httpProxy.createServer(9000, 'localhost').listen(8000); // localhost 의 9000 번 포트로 proxy 하는 8000번 포트.

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);