/**
 * New node file
 */

var http = require('http')
	,util = require('util')
	,httpProxy = require('http-proxy')
	,md_proxy = require('proxy-by-url');

//var options = {
//	pathnameOnly : true 		// 이 옵션으로 하면, hostname 은 쳐다보지 않는다~
//	,router: {
//		'/a' : 'localhost:9000'
//		,'/b' : 'localhost:8001'
//	}
//};

var proxyServer = httpProxy.createServer(options);
var proxyServer = httpProxy.createServer(md_proxy({
	'/a' : {port:9000, host:'localhost'}
	,'/b' : {port:8001, host:'localhost'}
}));
proxyServer.listen(8000);

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('[a][pathnameOnly] request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.write("URL: " + req.url);
	res.end();
}).listen(9000);

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.write('[b][pathnameOnly] request Successfully proxied! ' + '\n' + 
			JSON.stringify(req.headers, true, 2));
	res.end();
}).listen(8001);