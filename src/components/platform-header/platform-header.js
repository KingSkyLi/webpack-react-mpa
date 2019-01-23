import React from 'react';
import headerStyle from './platform-header.less';
export default class PlatformHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>这是平台的头部</h1>
                <div className={headerStyle['platform-bg']}></div>
            </div>
        );
    }
}