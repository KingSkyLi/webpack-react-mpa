var crypto = require('crypto');
var request = require('request-promise');
var querystring = require('querystring');

var URL = 'https://api.seniverse.com/v3/';

function WeatherApi(uid, secretKey) {
    this.uid = uid;
    this.secretKey = secretKey;
}

WeatherApi.prototype.getSignatureParams = function () {
    var params = {}
    params.ts = Math.floor((new Date()).getTime() / 1000); // 当前时间戳（秒）
    params.ttl = 300; // 过期时间
    params.uid = this.uid; // 用户ID
    var str = querystring.encode(params); // 构造请求字符串
    // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串进行加密
    params.sig = crypto
        .createHmac('sha1', this.secretKey)
        .update(str)
        .digest('base64'); // 将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
    return params;
}

WeatherApi.prototype.getWeatherNow = function (location) {
    var params = this.getSignatureParams();
    params.location = location || 'ip';
    return request({
        url: URL + 'weather/now.json',
        qs: params,
        json: true
    });
}

WeatherApi.prototype.getWeatherDaily = function (location, start, days) {
    var params = this.getSignatureParams();
    params.location = location || 'ip';
    params.start = start || 0;
    params.days = days || 3;
    return request({
        url: URL + 'weather/daily.json',
        qs: params,
        json: true
    });
}

WeatherApi.prototype.getWeatherSuggestion = function (location) {
    var params = this.getSignatureParams();
    params.location = location || 'ip';
    return request({
        url: URL + 'life/suggestion.json',
        qs: params,
        json: true
    });
}

function WeatherProxy(req, res, next) {
    const weatherApi = new WeatherApi('U47D44B59D', 'q6cjnn8wucct5fal');
    const path = req.path;
    const query = Object.assign({}, req.query);
    switch (path) {
        case '/getweathernow':
            weatherApi
                .getWeatherNow(query.location)
                .then((resp) => {
                    res.send(resp.results[0]);
                })
                .catch(err => {
                    console.log(err.response.body);
                    if (err.response) {
                        res.status(500).send(err.response.body)
                    } else {
                        res.status(500).send({
                            success: false,
                            msg: '未知错误'
                        })
                    }
                });
            break;
        case '/getweatherdaily':
            weatherApi
                .getWeatherDaily(query.location, query.start, query.days)
                .then((resp) => {
                    res.send(resp.results[0]);
                })
                .catch(err => {
                    console.log(err.response.body);
                    if (err.response) {
                        res.status(500).send(err.response.body)
                    } else {
                        res.status(500).send({
                            success: false,
                            msg: '未知错误'
                        })
                    }
                });
            break;
        case '/getweathersuggestion':
            weatherApi
                .getWeatherSuggestion(query.location)
                .then((resp) => {
                    res.send(resp.results[0]);
                })
                .catch(err => {
                    console.log(err.response.body);
                    if (err.response) {
                        res.status(500).send(err.response.body)
                    } else {
                        res.status(500).send({
                            success: false,
                            msg: '未知错误'
                        })
                    }
                });
            break;
    }

}

module.exports = WeatherProxy;