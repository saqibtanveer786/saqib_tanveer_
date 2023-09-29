import React from 'react';

export const EmailTemplate = ({
    name,
    email,
    message
}) => (
    <div>
        <h1>From, {name}!</h1>
        <p><strong>email: </strong> {email}</p>
        <p>{message}</p>
    </div>
);
