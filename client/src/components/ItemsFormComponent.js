import React from 'react';

export const ItemsFormComponent = ({ addItem }) => {
    let input;
    return (
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