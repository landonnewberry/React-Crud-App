import React from 'react';
import { Error } from './Error';

export const ItemsFormComponent = ({ addItem, error }) => {
    let input;
    return error ? Error(error) : (
        <div>
            <input type="text" ref={ node => { input = node } } />
            <button 
                onClick={ () => {
                    addItem(input.value);
                    input.value = '';
                } }>
                Add Item
            </button>
        </div>
    );
};