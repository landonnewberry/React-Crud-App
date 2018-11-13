import React from 'react';
import { ItemsList } from '../containers/ItemsList';
import { ItemsForm } from '../containers/ItemsForm';

export const Root = () => (
    <div>
        <ItemsList />
        <ItemsForm />
    </div>
);