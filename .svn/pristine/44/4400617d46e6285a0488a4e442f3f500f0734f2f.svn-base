/**
 * New node file
 */

var http = require('http')
	,httpProxy = require('http-proxy');

// 아래에서 
var proxyServerWithForwarding = httpProxy.createServer(9000, 'localhost', {
	forward: {
		port:9000
		,host:'naver.com'
	}
});
proxyServerWithForwarding.listen(8000);

// Simple 한 HTTP 서버들
http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('[a][pathnameOnly] request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('[b][pathnameOnly] request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(8001);