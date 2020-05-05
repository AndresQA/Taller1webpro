import React from 'react';

const Context = React.createContext({
    name: '',
    id: '',
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
    barrelColor: '',
    contextSetBarrelColor: ()=> null,
    classButt: '',
    funclassbutt: ()=> null,
    classSilencer: '',
    contextClassSilencer: () => null,
    classSight: '',
    contextClassSight: () => null,
    handleFinish:()=>null,
    list: [],
    setList: ()=> null,
    handleChangeId: ()=> null,
});

export default Context;