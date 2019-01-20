import React from 'react';
import PageHeader from '../../components/platform-header/platform-header';
import PageFooter from '../../components/platform-footer/platform-footer';
import { Icon, Button } from 'antd'
// import Button from '../../../node_modules/antd/lib/button';
// import Icon from '../../../node_modules/antd/lib/icon';
// import '../../../node_modules/antd/lib/icon/style/index.css';
// import '../../../node_modules/antd/lib/button/style/index.css';

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
                <PageFooter />
            </div>
        )
    }
}
export default Index;