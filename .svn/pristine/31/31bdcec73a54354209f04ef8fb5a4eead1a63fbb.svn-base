/**
 * New node file
 */
var http = require('http')
	,httpProxy = require('http-proxy');

httpProxy.createServer(function(req, res, proxy) {
	
	// request 를 버퍼링해서 data 와 end 이벤트가 async 오퍼레이션 동안 사라지지 않도록 한다
	var buffer = httpProxy.buffer(req);
	
	setTimeout(function() {
		proxy.proxyRequest(req, res, {
			host:'localhost'
			,port:9000
			,buffer:buffer
		});
	}, 2000);
	
}).listen(8000);

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(9000);