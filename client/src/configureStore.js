import { items } from './reducers/items';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const store = createStore(
        items,
        applyMiddleware(thunk)
    );

    return store;
};