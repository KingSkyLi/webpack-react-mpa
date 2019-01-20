import React from 'react';
import { Button } from 'antd'
import  detailTyle from './detail.less';
class Detail extends React.Component{
    render(){
        return (
            <div className={detailTyle['detail-box']}> 这是detail详情页<Button>这是一个按钮</Button></div>
            
        )
    }
}
export default Detail;