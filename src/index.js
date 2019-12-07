var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static(path.resolve(__dirname, 'assets')));
app.use(function(request, response, next) {
	const proxy = request.query.proxy;
	if(proxy) {
		request.header.cookie += `__proxy__${proxy}`;
	}
	next();
})

const port = process.env.PORT || 3000;

require('./router')(app);

app.listen(port, () => {
	console.log(`server running @http://localhost:${port}`);
})

module.exports = app;