import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './configureStore';
import { Root } from './components/Root';
import { Provider } from 'react-redux';
import axios from 'axios';

const store = configureStore();



fetch('http://localhost:5000/item', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
    },
    data: {
      value: 'Fred',
      id: 'Flintstone'
    }
});


ReactDOM.render(
    <Provider store={ store }>
        <Root />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
