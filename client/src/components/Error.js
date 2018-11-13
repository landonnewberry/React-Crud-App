import React from 'react';

export const Error = ({ title, body }) => (
    <div style={{ color: "red" }}>
        <h1>{ title }</h1>
        <p>{ body }</p>
    </div>
);