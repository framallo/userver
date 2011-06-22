var connect = require('connect');
var oneDay = 86400000;

var public = connect.vhost('framallo.com', connect.createServer(
	connect.static(process.env.HOME + '/public', { maxAge: oneDay })
));

var share  = connect.vhost('share.framallo.com', connect.createServer(
	connect.static(process.env.HOME + '/share', { maxAge: oneDay })
));

var server = connect.createServer(
	connect.logger(':url :req[host] :req[Host]')
,public
,share
)
server.listen(process.env.PORT);
