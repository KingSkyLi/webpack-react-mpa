import React from 'react';
import {Layout, Button, Icon} from 'antd';
import PageHeader from '../../components/platform-header/platform-header';
import PageFooter from '../../components/platform-footer/platform-footer';

import detailTyle from './detail.less';

const {Header, Footer, Content} = Layout;
class Detail extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {}
    render() {
        return (
            <div>
                <Layout>
                    <Header className={detailTyle.header}>
                        <PageHeader/>
                    </Header>
                    <Content>
                        <div className={detailTyle['detail-box']}>
                            这是detail详情页123123
                        </div>
                        <Button>这是一个按钮</Button>
                        <Icon type="star" theme="filled"/>
                        <Icon type="star" theme="filled"/>
                        <Icon type="star" theme="filled"/>
                        <Icon type="star" theme="filled"/>
                        <Icon type="star" theme="filled"/>
                        <Icon type="star" theme="filled"/>
                        <a href="/">返回index页</a>
                    </Content>
                    <Footer >
                        <PageFooter/>
                    </Footer>
                </Layout>
            </div>

        )
    }
}
export default Detail;