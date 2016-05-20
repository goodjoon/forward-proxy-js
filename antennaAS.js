
/**
 * Antenna 로의 HTTP Request 를 Proxy 해주는 서버임.
 */

var httpProxy = require('http-proxy');

var httpProxyServer = httpProxy.createServer(require('./handlers/url_handler')(
		{
			'/guppy' : {port:8081, host:'localhost', keepUrl:true}
		})).listen(8080);

httpProxyServer.proxy.on('start', function(req, res, target ) {
	console.log('Proxing [' + req.headers.host + req.url + '] to <' + target.host + ':' + target.port + '>' );
});