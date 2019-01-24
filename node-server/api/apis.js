const WeatherApi = require('../business-component-server/weather-server.js');

module.exports = function(req,res,next){
    const path = req.path;
    console.log(path);
    res.end()
}