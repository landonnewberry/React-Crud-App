import { v4 } from 'node-uuid';
import { addError, errorTypes } from '../actions/error';


export const addItem = (value) => ({
    type: 'ADD_ITEM',
    value,
    id: v4()
});

// where async logic for certain actions are specified
const addItemAsync = () => fetch('http://localhost:5000', { mode: 'no-cors' });

export const addItemWithAPICall = (value) => (
    dispatch => (
        addItemAsync().then(
            html => dispatch(addItem(value)),
            error => dispatch(addError(errorTypes.NO_CONNECTION))
        )
    )
);


export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id
});