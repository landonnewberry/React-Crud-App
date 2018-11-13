import React from 'react';

export const ItemsListComponent = ({ items }) => (
    <ul>
        { items.map(item => {
            return <li key={ item.id }>{ item.value }</li>;
        }) }
    </ul>
);