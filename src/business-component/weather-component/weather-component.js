import React from 'react';
import WeatherServer from '../../servers/business-server/weather-server'
import WeatherStyle from './weather-component.less';
export default class WeatherCompenent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherList: []
        }
    }
    componentDidMount() {
        this.getWeatherDaily();
        this.getWeatherSuggestion();
    }
    getWeatherDaily() {
        WeatherServer.getWeatherDaily().then(res => {
            console.log(res);
            if (res.status === 200) {
                let data = res.data;
                console.log(data);
                this.setState({
                    weatherList: data.daily
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }
    getWeatherSuggestion() {
        WeatherServer.getWeatherSuggestion().then((res) => {
            if (res.status === 200) {
                let data = res.data;
                console.log(data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h3>这是一个天气组件</h3>
                <div className={WeatherStyle.weather_list}>
                    {
                        this.state.weatherList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={WeatherStyle[`png${item.code_day}`]}>
                                        <span>昼:{item.text_day}</span>
                                    </div>
                                    <div className={WeatherStyle[`png${item.code_night}`]}>
                                        <span>夜:{item.text_night}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}