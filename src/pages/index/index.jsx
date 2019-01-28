var $ = require('jquery');
import '../../assets/js/ripples/jquery.ripples-min';
import React from 'react';
import indexTyle from './index.less';
import WeatherComponent from '../../business-component/weather-component/weather-component';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        $('#warter-ripples').ripples({
            dropRadius: 16,
            perturbance: 0.03,
            resolution: 512
        });
    }
    render() {
        return (
            <div className={indexTyle.page}>
                <div className={indexTyle.weather}>
                    <WeatherComponent />
                </div>
                <div id="warter-ripples" className={indexTyle.ripples}>
                    <div className={indexTyle.box}>欢迎来到历鹏飞的个人网站</div>
                </div>
            </div>
        )
    }
}

export default Index;