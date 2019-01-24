import React from 'react';
import FirstModuleStyle from './first-module.less';
import { connect } from 'react-redux';
import img200 from './image/200-200.jpg'

const action_creator_add = ()=>{
    return {
        type:'add'
    }
}

class FirstModule extends React.Component {
    render() {
        const add = this.props.action_creator_add;
        return (
            <div>
                <h2 className={FirstModuleStyle['first-module']}>首页的第一个模块</h2>
                {/* <img src={img200} /> */}
                <div>index_num={this.props.index_num}</div>
                <button onClick={add}>加+</button>
            </div>
        );
    }
}

const mapStatetopProp = (state)=>{
    return { index_num:state}
}

const actionCreators = { action_creator_add }

export default connect(mapStatetopProp,actionCreators)(FirstModule);