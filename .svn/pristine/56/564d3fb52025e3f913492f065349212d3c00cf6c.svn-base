/**
 * New node file
 */

var http = require('http')
	,httpProxy = require('http-proxy');

var options = {
	hostnameOnly:true // hostnameOnly 로 쓰면, 속도에도 더 이점이 있다. 그러나, path 는 타지 않으므로 주의한다.
	,router: {
		'localhost' : '127.0.0.1:9000' 
		,'127.0.0.1' : '127.0.0.1:8001'
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