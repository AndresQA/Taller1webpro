import React from 'react';

const Context = React.createContext({
    name: '',
    contextSetName: () => null,
    color: 'black',

});

export default Context;