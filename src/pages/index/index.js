import React from 'react';
import ReactDom from 'react-dom';
import {
    AppContainer,
} from 'react-hot-loader'
import Index from './index.jsx';

const render = Page => {
    ReactDom.render(
            <AppContainer >
                <Page />
            </AppContainer>,
        document.getElementById('root')
    )
}

render(Index);
if (module.hot) {
    module.hot.accept('./index.jsx', () => {
        const NextPage = require('./index.jsx').default;
        render(NextPage);
    })
}