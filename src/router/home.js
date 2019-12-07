var { getHomeData } = require('../controller/homeController');

module.exports = function(app) {
	app.get('/home/switper', getHomeData);
}