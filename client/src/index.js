import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './configureStore';
import { Root } from './components/Root';
import { addItem } from './actions/items';
import { Provider } from 'react-redux';
// import { addError, errorTypes } from './actions/error';


const store = configureStore();


// test
store.dispatch(addItem('Is this visible?'));
store.dispatch(addItem('Hello, world!'))
// store.dispatch(addError(errorTypes.NO_CONNECTION));

console.log(store.getState());

ReactDOM.render(
    <Provider store={ store }>
        <Root />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
