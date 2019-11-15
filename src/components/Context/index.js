import React from 'react';

export const initialState = {
    store: [],
};

const Context = React.createContext(initialState);

export default Context;
