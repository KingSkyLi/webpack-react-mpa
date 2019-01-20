import React from 'react';
import PageHeader from '../../components/platform-header/platform-header';
import PageFooter from '../../components/platform-footer/platform-footer';
import FirstModule from './modules/first-module/first-module';
import { Icon, Button } from 'antd'

import  indexTyle from './index.less';
class Index extends React.Component{
    render(){
        return (
            <div>
                <PageHeader />
                <p>这是index首页</p>
                <Button>这是一个按钮</Button>
                <div className={indexTyle.box}></div>
                <Icon type="star" theme="filled" />
                <FirstModule />
                <PageFooter />
            </div>
        )
    }
}
export default Index;