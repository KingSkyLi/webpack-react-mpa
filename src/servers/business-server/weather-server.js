import axios from 'axios';

const weatherServer = {
    getWeatherNow(params={}){
        let url = '/api/weather/getweathernow';
        let config = {
            location:params.location,
        }
        return axios.get(url,config)
    },
    getWeatherDaily(params={}){
        let url = '/api/weather/getweatherdaily';
        let config = {
            location:params.location,
            start:params.start,
            days:params.days
        }
        return axios.get(url,config)
    },
    getWeatherSuggestion(params={}){
        let url = '/api/weather/getweathersuggestion';
        let config = {
            location:params.location,
        }
        return axios.get(url,config)
    }
}

export default weatherServer;