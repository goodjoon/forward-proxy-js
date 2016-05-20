/**
 * Source URL : { host, port, keepUrl } 의 옵션에 따라 Destination URL 을 만들어서 리턴한다.
 */

function matcher(routeTargetUrl, dest) {
	// 정규식 Object 를 생성한다. 이건, 나중에 routeTargetUrl 을 Request URL 에서 빼버리도록 하기 위함이다.
	var regExp = new RegExp(routeTargetUrl.replace(/\//, '\\/'));
	
	return function(requestUrl) {
		// routeTargetUrl 이 requestUrl 에 match 되는지 알아봄.
		var matched = regExp.exec(requestUrl);
		
		if (!matched) {
			return;
		}
		
		var path = requestUrl;
		if (!dest.keepUrl) {
			path = requestUrl.slice(matched[0].length); // matched[0] 는 routeTargetUrl 이 들어있음. 이거 잘라냄.
			delete dest['keepUrl'];
		}
		
		return {'url':path, 'dest':dest};
	};
}

module.exports = function(proxyTable) {
	var matchers = [];
	for (var jsonKeyName in proxyTable) {
		matchers.push(matcher(jsonKeyName, proxyTable[jsonKeyName]));
	}
	
	return function(req, res, next) {
		var httpProxy = next;
		
		for(var index in matchers) {
			var matched = matchers[index](req.url);
			if (matched) {
				req.url = matched.url;
//				req.headers.host = matched.dest.port?matched.dest.host+':'+matched.dest.port:matched.dest.host;
				
				return httpProxy.proxyRequest(req, res, matched.dest);
			}
		}
		next();
	};
}