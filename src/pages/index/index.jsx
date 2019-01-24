import React from 'react';
import PageHeader from '../../components/platform-header/platform-header';
import PageFooter from '../../components/platform-footer/platform-footer';
import FirstModule from './modules/first-module/first-module';
import WeatherCompenent from '../../business-component/weather-component/weather-component';
import {Layout, Icon, Button} from 'antd'

import indexTyle from './index.less';

const {Header, Footer, Sider, Content} = Layout;

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header className={indexTyle.header}>
                        <PageHeader/>
                    </Header>
                    <Content>
                        <p>这是index首页</p>
                        <div>
                            <WeatherCompenent />
                        </div>
                        <a href="/detail">到detail页</a>
                        <FirstModule/>
                    </Content>
                    <Footer className={indexTyle.footer}>
                        <PageFooter/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Index;