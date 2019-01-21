import React from 'react';
import PageHeader from '../../components/platform-header/platform-header';
import PageFooter from '../../components/platform-footer/platform-footer';
import FirstModule from './modules/first-module/first-module';
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
                    <Sider className={indexTyle.slider}>
                        <Button>这是一个按钮</Button>
                    </Sider>
                    <Layout>
                        <Header className={indexTyle.header}>
                            <PageHeader/>
                        </Header>
                        <Content>
                            <p>这是index首页</p>
                            <a href="/detail">到detail页</a>
                            <div className={indexTyle.box}></div>
                            <Icon type="star" theme="filled"/><Icon type="star" theme="filled"/><Icon type="star" theme="filled"/>
                            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                            <Icon type="star" theme="filled"/><Icon type="star" theme="filled"/><Icon type="star" theme="filled"/>
                            <FirstModule/>
                        </Content>
                        <Footer className={indexTyle.footer}>
                            <PageFooter/>
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Index;