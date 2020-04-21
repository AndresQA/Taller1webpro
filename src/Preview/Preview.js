import React from 'react';
//import PropTypes from 'prop-types';
import Context from '../context';



const Preview = () => {

    const context = React.useContext(Context);

    const handleclic = () => {
        console.log(context.sight);
    }

    return <div>
        <div className="preview">
            <img src={context.color} className="preview_armbody" onClick={handleclic} alt="" />
            <img src={context.butt} className={context.classButt} alt="" />
            <img src={context.mag} className="preview_mag" alt="" />
            <img src={context.handle} className="preview_handle" alt="" />
            <img src={context.barrelColor} className="preview_barrel" alt="" />
            <img src={context.silencer} className={context.classSilencer} alt="" />
            <img src={context.sight} className="preview_sight" alt="" />

        </div>
        <p className="namegun"><strong> {context.name} </strong></p>
    </div>
}

export default Preview;