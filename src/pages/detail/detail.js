import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import Detail from './detail.jsx';

const render = Page => {
    ReactDom.render(
        <AppContainer>
            <Page />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Detail);
if(module.hot){
    module.hot.accept('./detail.jsx', ()=>{
        const NextPage = require('./detail.jsx').default;
        render(NextPage);
    })
}