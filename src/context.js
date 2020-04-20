import React from 'react';

const Context = React.createContext({
    name: '',
    contextSetName: () => null,
    color: 'black',
    contextSetColor: () => null,
    mag: '',
    contextSetMag: () => null,
    sight: '',
    contextSetSight: () => null,
    silencer: '',
    contextSetSilencer: () => null,
    handle: '',
    contextSetHandle: ()=> null,
    butt: '',
    contextSetButt: () => null,
    barrel: '',
    contextSetBarrel: ()=> null,


});

export default Context;