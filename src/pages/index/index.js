import React from 'react';
import ReactDom from 'react-dom';

import {
    AppContainer
} from 'react-hot-loader'
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk'
import Index from './index.jsx';
import {
    Provider
} from 'react-redux';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension : () => { };

const counter = (num = 10, action) => {
    switch (action.type) {
        case 'add': return num + 1;
        case 'min': return num - 1;
        default: return num;
    }
}


const store = createStore(
    counter,
    compose(applyMiddleware(thunk), reduxDevtools())
)
const render = Page => {
    ReactDom.render(
        <Provider store={store}>
            <AppContainer >
                <Page />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}

render(Index);
if (module.hot) {
    console.log(123)
    module.hot.accept('./index.jsx', () => {
        const NextPage = require('./index.jsx').default;
        render(NextPage);
    })
}