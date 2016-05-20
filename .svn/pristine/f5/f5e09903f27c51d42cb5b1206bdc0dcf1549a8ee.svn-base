/**
 * New node file
 */

var http = require('http')
	,httpProxy = require('http-proxy');

var options = {
	router: {
		'localhost/a' : 'localhost:9000' // localhost:8000/a 로 시작하면 모두 이리 온다. localhost:8000/a/abcd/sss?aaa => 이것도 온다.
		,'localhost/b' : 'localhost:8001'
	}
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(8000);

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('[a] request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('[b] request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(8001);