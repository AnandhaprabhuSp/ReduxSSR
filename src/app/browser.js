import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './index';
import configureStore from '../configureStore';

const store = configureStore(window.__APP_INITIAL_STATE__)

console.log(window.__APP_INITIAL_STATE__, 'window.__APP_INITIAL_STATE__')
console.log(store, 'store')

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);