import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './configureStore';
import { Root } from './components/Root';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Root />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
