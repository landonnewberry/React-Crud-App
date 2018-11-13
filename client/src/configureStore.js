import { items } from './reducers/items';
import { error } from './reducers/error';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            items,
            error
        }),
        applyMiddleware(thunk)
    );

    return store;
};