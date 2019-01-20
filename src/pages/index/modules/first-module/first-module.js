import React from 'react';
import FirstModuleStyle from './first-module.less';

export default class FirstModule extends React.Component {
    render() {
        return (
            <div>
                <h2 className={FirstModuleStyle['first-module']}>首页的第一个模块</h2>
                {/* <img src="../../../../assets/image/200-200.jpg" /> */}
            </div>
        );
    }
}