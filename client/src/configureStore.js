import { items } from './reducers/items';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { fetchItems } from './api';

export const configureStore = () => {

    const middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    const store = createStore(
        combineReducers({
            items
        }),
        applyMiddleware(...middlewares)
    );

    return store;
};