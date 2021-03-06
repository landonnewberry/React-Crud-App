import { v4 } from 'node-uuid';
import { fetchItems } from '../api';

export const addItem = (value) => ({
    type: 'ADD_ITEM',
    value,
    id: v4()
});

// where async logic for certain actions are specified
// const addItemAsync = () => fetch('http://localhost:5000/item', { mode: 'no-cors' });

export const addItemWithAPICall = (value) => (
    dispatch => (
        fetchItems().then(items =>
            console.log(items)
        )
    )
);


export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id
});