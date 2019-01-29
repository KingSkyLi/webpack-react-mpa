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
            if (res.status === 200) {
                let data = res.data;
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
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <div className={WeatherStyle.weather_list}>
                    {
                        this.state.weatherList.map((item, index) => {
                            return (
                                <div key={index} className={WeatherStyle.everyday}>
                                    <div className={WeatherStyle[`png${item.code_day}`]}>
                                        <span>昼:{item.text_day}</span>
                                    </div>
                                    <div className={WeatherStyle[`png${item.code_night}`]}>
                                        <span>夜:{item.text_night}</span>
                                    </div>
                                    <div className={WeatherStyle.temperature}>
                                        {`${item.low}°C`}~{`${item.high}°C`}
                                    </div>
                                    <div className={WeatherStyle.date}>
                                       {item.date}
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